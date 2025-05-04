import { makeObservable, action, observable } from "mobx";

class UsersStore {
  users = [];
  currentUser = null;
  error = null;

  constructor() {
    makeObservable(this, {
      users: observable,
      currentUser: observable,
      error: observable,
      registerUser: action,
      loginUser: action,
      logoutUser: action,
      loadUsers: action,
      setCurrentUser: action,
      setError: action,
      clearError: action,
    });
    this.loadUsers();
  }

  // Загрузка пользователей из localStorage
  loadUsers() {
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
  }

  // Сохранение пользователей в localStorage
  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  // Установка текущего пользователя
  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  // Очистка текущего пользователя (выход)
  logoutUser() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  // Установка ошибки
  setError(error) {
    this.error = error;
  }

  // Очистка ошибки
  clearError() {
    this.error = null;
  }

  // Валидация данных пользователя
  validateUserData(userData, isLogin = false) {
    const fieldLabels = {
      name: "Имя",
      surname: "Фамилия",
      country: "Страна",
      city: "Населённый пункт",
      birthdate: "Дата рождения",
      email: "Email",
      phone: "Телефон",
      password: "Пароль",
      passwordconfirm: "Повторите пароль",
    };

    const errors = [];

    // Проверка заполненности полей
    if (!isLogin) {
      Object.entries(fieldLabels).forEach(([field, label]) => {
        if (!userData[field] && field !== "passwordconfirm") {
          errors.push(label);
        }
      });
    } else {
      if (!userData.email) errors.push(fieldLabels.email);
      if (!userData.password) errors.push(fieldLabels.password);
    }

    // Специальные проверки для регистрации
    if (!isLogin) {
      if (userData.password !== userData.passwordconfirm) {
        errors.push("Пароли не совпадают");
      }

      if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
        errors.push("Email введен некорректно");
      }
    }

    return errors;
  }

  // Регистрация пользователя
  registerUser(userData) {
    this.clearError();
    const errors = this.validateUserData(userData);

    if (errors.length > 0) {
      this.setError(`Ошибки:<br>${errors.join(",<br>")}`);
      return false;
    }

    if (this.users.some((user) => user.email === userData.email)) {
      this.setError("Пользователь с таким Email уже существует");
      return false;
    }

    const { passwordconfirm, ...userToSave } = userData;
    this.users.push(userToSave);
    this.saveUsers();
    this.setCurrentUser(userToSave);
    return true;
  }

  // Авторизация пользователя
  loginUser(credentials) {
    this.clearError();
    const errors = this.validateUserData(credentials, true);

    if (errors.length > 0) {
      this.setError(`Ошибки:<br>${errors.join(",<br>")}`);
      return false;
    }

    const user = this.users.find((u) => u.email === credentials.email);
    if (!user) {
      this.setError("Пользователь с таким Email не найден");
      return false;
    }

    if (user.password !== credentials.password) {
      this.setError("Неверный пароль");
      return false;
    }

    this.setCurrentUser(user);
    return true;
  }

  // Проверка авторизации
  isAuthenticated() {
    return !!this?.currentUser;
    // return this?.currentUser != null;
  }
}

const usersStore = new UsersStore();
export default usersStore;
