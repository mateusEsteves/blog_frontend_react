import Axios from 'axios';

export default class BaseService {
  constructor() {
    const axiosInstance = Axios.create({
      withCredentials: true,
    });

    Object.assign(this, axiosInstance);
  }
}
