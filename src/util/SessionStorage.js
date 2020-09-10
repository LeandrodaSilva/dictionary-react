export default class SessionStorage {
  static saveSession(token) {
    localStorage.setItem("token", token);
  }

  static deleteSession() {
    localStorage.removeItem("token");
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
