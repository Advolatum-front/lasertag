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
      loadUsers: action,
      setCurrentUser: action,
      setError: action,
    });
    this.loadUsers();
  }

  loadUsers() {
    const storedUsers = localStorage.getItem("users");
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  setError(error) {
    this.error = error;
  }

  registerUser(userData) {
    // Проверка на существующего пользователя
    const userExists = this.users.some((user) => user.email === userData.email);
    if (userExists) {
      this.setError("Пользователь с таким email уже существует");
      return false;
    }

    // Проверка совпадения паролей
    if (userData.password !== userData.passwordconfirm) {
      this.setError("Пароли не совпадают");
      return false;
    }

    // Удаляем подтверждение пароля перед сохранением
    const { passwordconfirm, ...userToSave } = userData;
    this.users.push(userToSave);
    localStorage.setItem("users", JSON.stringify(this.users));
    this.setCurrentUser(userToSave);
    return true;
  }

  validateUserData(userData) {
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
    Object.entries(fieldLabels).forEach(([field, label]) => {
      if (!userData[field]) {
        errors.push(label);
      }
    });

    return errors;
  }
}

const usersStore = new UsersStore();
export default usersStore;
