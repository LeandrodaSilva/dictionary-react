export default class SessionStorage {
  static saveSession(token) {
    SessionStorage.deleteSession();
    localStorage.setItem("token", token);
  }

  static getSession() {
    return localStorage.getItem("token");
  }

  static deleteSession() {
    localStorage.removeItem("token");
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
