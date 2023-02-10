import HTTP from '../utils/http';
import BaseAPI from './base-api';

const authAPIBase = new HTTP();

export default class AuthAPI extends BaseAPI {
    static basePath = `${BaseAPI.baseUrl}/auth`;

    signup() {
        return authAPIBase.post(`${AuthAPI.basePath}/signup/`, {
            data: {
                login: 'chausme11',
                password: 'passchausme11',
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    signin() {
        return authAPIBase.post(`${AuthAPI.basePath}/signin/`, {
            data: {
                login: 'chausme11',
                password: 'passchausme11',
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    request() {
        return authAPIBase.get(`${AuthAPI.basePath}/user/`);
    }

    logout() {
        return authAPIBase.post(`${AuthAPI.basePath}/logout/`);
    }
}
