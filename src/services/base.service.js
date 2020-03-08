import Axios from 'axios';

export default class BaseService {
    constructor() {
        this.axiosInstance = Axios.create({
            withCredentials: true
        });

        Object.assign(this, this.axiosInstance);
    }
}