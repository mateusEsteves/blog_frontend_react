import BaseService from "./base.service";

class _AuthService extends BaseService {
    login(username, password) {
        return this
            .post('http://localhost:3200/login', { username, password })
            .then(result => {
                this.user = result.data;
                return result.data;
            });
    }

    set user(user) {
        let userAsString = JSON.stringify(user);
        window.localStorage.setItem('user', userAsString);
    }

    get user() {
        let userAsString = window.localStorage.getItem('user');
        return JSON.parse(userAsString);
    }
}

const AuthService = new _AuthService();
Object.freeze(AuthService);
export default AuthService;