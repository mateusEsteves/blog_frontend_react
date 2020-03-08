import BaseService from "./base.service";

class _AuthService extends BaseService {
    login(username, password) {
        return this.post('http://localhost:3200/login', { username, password });
    }
}

const AuthService = new _AuthService();
Object.freeze(AuthService);
export default AuthService;