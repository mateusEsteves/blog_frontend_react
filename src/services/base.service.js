import Axios from 'axios';

export default class BaseService {
    constructor() {
        let axiosInstance = Axios.create({
            withCredentials: true
        });

        Object.assign(this, axiosInstance);
    }
}