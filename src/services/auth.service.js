import BaseService from './base.service';

class _AuthService extends BaseService {
  login() {
    // return this
    //   .post('http://localhost:3200/login', { username, password })
    //   .then((result) => {
    //     this.user = result.data;
    //     return result.data;
    //   });

    return Promise.resolve({
      username: 'admin',
      id: '93c5ddfd-cdc7-42ee-900a-911b2a23737f',
    });
  }

  set user(user) {
    const userAsString = JSON.stringify(user);
    window.localStorage.setItem('user', userAsString);
  }

  get user() {
    const userAsString = window.localStorage.getItem('user');
    return JSON.parse(userAsString);
  }
}

const AuthService = new _AuthService();
Object.freeze(AuthService);
export default AuthService;
