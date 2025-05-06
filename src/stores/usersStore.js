import { makeObservable, action, observable, computed } from "mobx";

class UsersStore {
  users = [];
  currentUser = null;
  error = null;
  iterations = 100000; // Количество итераций PBKDF2
  keyLength = 32; // Длина ключа в байтах (256 бит)

  constructor() {
    makeObservable(this, {
      users: observable,
      currentUser: observable,
      error: observable,
      registerUser: action,
      loginUser: action,
      logoutUser: action,
      resetPassword: action,
      loadUsers: action,
      setCurrentUser: action,
      setError: action,
      clearError: action,
      isAuthenticated: computed,
    });
    this.loadUsers();
  }

  // --- Хеширование пароля ---
  hashPassword = async (password, salt) => {
    try {
      const encoder = new TextEncoder();

      // 1. Импорт пароля как ключа
      const keyMaterial = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveBits"],
      );

      // 2. Генерация хеша
      const derivedBits = await crypto.subtle.deriveBits(
        {
          name: "PBKDF2",
          salt: encoder.encode(salt),
          iterations: this.iterations,
          hash: "SHA-256",
        },
        keyMaterial,
        this.keyLength * 8,
      );

      // 3. Конвертация в hex-строку
      return Array.from(new Uint8Array(derivedBits))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } catch (e) {
      console.error("Ошибка хеширования:", e);
      throw new Error("Ошибка при обработке пароля");
    }
  };

  // --- Генерация соли ---
  generateSalt = () => {
    return crypto
      .getRandomValues(new Uint8Array(16))
      .reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  };

  // --- Работа с localStorage ---
  loadUsers = () => {
    try {
      const storedUsers = localStorage.getItem("users");
      this.users = storedUsers ? JSON.parse(storedUsers) : [];

      const storedUser = localStorage.getItem("currentUser");
      this.currentUser = storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Ошибка загрузки пользователей:", e);
      this.users = [];
      this.currentUser = null;
    }
  };

  saveUsers = () => {
    localStorage.setItem("users", JSON.stringify(this.users));
  };

  // --- Методы для компонентов ---
  registerUser = async (userData) => {
    this.clearError();

    // Валидация
    if (!userData.email || !userData.password) {
      this.setError("Email и пароль обязательны");
      return false;
    }

    if (this.users.some((u) => u.email === userData.email)) {
      this.setError("Пользователь с таким email уже существует");
      return false;
    }

    try {
      const salt = this.generateSalt();
      const hashedPassword = await this.hashPassword(userData.password, salt);

      const user = {
        email: userData.email,
        password: hashedPassword,
        salt,
        createdAt: new Date().toISOString(),
      };

      this.users.push(user);
      this.saveUsers();
      return true;
    } catch (e) {
      this.setError("Ошибка при регистрации");
      return false;
    }
  };

  loginUser = async ({ email, password }) => {
    this.clearError();
    const user = this.users.find((u) => u.email === email);

    if (!user) {
      this.setError("Пользователь не найден");
      return false;
    }

    try {
      const hashedInput = await this.hashPassword(password, user.salt);
      if (hashedInput !== user.password) {
        this.setError("Неверный пароль");
        return false;
      }

      this.setCurrentUser(user);
      return true;
    } catch (e) {
      this.setError("Ошибка при входе");
      return false;
    }
  };

  resetPassword = async (email, newPassword) => {
    this.clearError();
    const user = this.users.find((u) => u.email === email);

    if (!user) {
      this.setError("Пользователь не найден");
      return false;
    }

    try {
      const hashedPassword = await this.hashPassword(newPassword, user.salt);
      user.password = hashedPassword;
      user.updatedAt = new Date().toISOString();
      this.saveUsers();
      return true;
    } catch (e) {
      this.setError("Ошибка при смене пароля");
      return false;
    }
  };

  logoutUser = () => {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  };

  setCurrentUser = (user) => {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  setError = (error) => {
    this.error = error;
  };

  clearError = () => {
    this.error = null;
  };

  get isAuthenticated() {
    return !!this.currentUser;
  }
}

// Создаем и экспортируем singleton стора
const usersStore = new UsersStore();
export default usersStore;
