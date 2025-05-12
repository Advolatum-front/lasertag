import { makeObservable, action, observable, computed } from "mobx";

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
      updateUser: action,
      addActivityRequest: action,
      addMediaToFavorites: action,
      removeMediaFromFavorites: action,

      isAuthenticated: computed,
    });
    this.loadUsers();
  }

  // Загрузка пользователей из localStorage
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

  // Сохранение пользователей в localStorage
  saveUsers = () => {
    localStorage.setItem("users", JSON.stringify(this.users));
  };

  // Установка текущего пользователя
  setCurrentUser = (user) => {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // Обновление данных пользователя
  updateUser = (updatedData) => {
    if (!this.currentUser) return false;

    const userIndex = this.users.findIndex(
      (u) => u.email === this.currentUser.email,
    );
    if (userIndex === -1) return false;

    // Обновляем данные, кроме пароля (если он не был передан)
    const { password, ...dataToUpdate } = updatedData;
    const updatedUser = {
      ...this.users[userIndex],
      ...dataToUpdate,
    };

    this.users[userIndex] = updatedUser;
    this.currentUser = updatedUser;
    this.saveUsers();
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    return true;
  };

  // Добавление заявки на мероприятие
  addActivityRequest = (activityRequest) => {
    if (!this.currentUser) return false;

    const userIndex = this.users.findIndex(
      (u) => u.email === this.currentUser.email,
    );
    if (userIndex === -1) return false;

    // Инициализируем поле activities, если его нет
    if (!this.users[userIndex].activities) {
      this.users[userIndex].activities = [];
    }

    // Добавляем новую заявку
    this.users[userIndex].activities.push(activityRequest);

    // Обновляем текущего пользователя
    this.currentUser = this.users[userIndex];

    this.saveUsers();
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    return true;
  };

  // Добавление фото/видео в избранное (добавляется id фото/видео)
  addMediaToFavorites = (itemId) => {
    if (!this.currentUser) {
      return false;
    }

    const userIndex = this.users.findIndex(
      (user) => user.email === this.currentUser.email,
    );

    if (userIndex === -1) {
      return false;
    }

    // Инициализируем поле favorites, если его нет
    if (!this.users[userIndex].favorites) {
      this.users[userIndex].favorites = [];
    }

    // Добавляем новый id
    this.users[userIndex].favorites.push(itemId);

    // обновить текущего пользователя
    this.currentUser = this.users[userIndex];

    this.saveUsers();
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    return true;
  };

  // удаление фото/видео из избранного
  removeMediaFromFavorites = (itemId) => {
    if (!this.currentUser) {
      return false;
    }

    const userIndex = this.users.findIndex(
      (user) => user.email === this.currentUser.email,
    );

    if (userIndex === -1) {
      return false;
    }

    // Удаляем заданный id
    this.users[userIndex].favorites = this.users[userIndex].favorites.filter(
      (id) => id !== itemId,
    );

    // обновить текущего пользователя
    this.currentUser = this.users[userIndex];

    this.saveUsers();
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    return true;
  };

  // Очистка текущего пользователя (выход)
  logoutUser = () => {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  };

  // Установка ошибки
  setError = (error) => {
    this.error = error;
  };

  // Очистка ошибки
  clearError = () => {
    this.error = null;
  };

  // Валидация данных пользователя
  validateUserData = (userData, isLogin = false) => {
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
        if (
          !userData[field] &&
          field !== "password" &&
          field !== "passwordconfirm" &&
          field !== "photo"
        ) {
          errors.push(label);
        }
      });
    } else {
      if (!userData.email) errors.push(fieldLabels.email);
      if (!userData.password) errors.push(fieldLabels.password);
    }

    // Специальные проверки для регистрации
    if (!isLogin) {
      if (userData.password && userData.password !== userData.passwordconfirm) {
        errors.push("Пароли не совпадают");
      }

      if (userData.email && !/^\S+@\S+\.\S+$/.test(userData.email)) {
        errors.push("Email введен некорректно");
      }
    }

    return errors;
  };

  // Регистрация пользователя
  registerUser = (userData) => {
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
  };

  // Авторизация пользователя
  loginUser = (credentials) => {
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
  };

  // Проверка авторизации
  get isAuthenticated() {
    return !!this?.currentUser;
  }
}

const usersStore = new UsersStore();
export default usersStore;
