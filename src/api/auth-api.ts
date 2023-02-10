import HTTP from '../utils/http';
import BaseAPI from './base-api';
import { ApiAuthSignIn } from '~/src/utils/prop-types';

const authAPIBase = new HTTP();

export default class AuthAPI extends BaseAPI {
    static basePath = `${BaseAPI.baseUrl}/auth`;

    signup() {
        return authAPIBase.post(`${AuthAPI.basePath}/signup/`, {
            data: {
                login: 'chausme11',
                password: 'passchausme11',
            },
        });
    }

    signin(data: ApiAuthSignIn) {
        return authAPIBase.post(`${AuthAPI.basePath}/signin/`, {
            data,
        });
    }

    request() {
        return authAPIBase.get(`${AuthAPI.basePath}/user/`);
    }

    logout() {
        return authAPIBase.post(`${AuthAPI.basePath}/logout/`);
    }
}
