import AuthAPI from '../api/auth-api';
import { ApiAuthSignIn } from '~/src/utils/prop-types';
import router from '~/src/index';

export class AuthController {
    #api = new AuthAPI();

    async signup() {
        try {
            await this.#api.signup().then((data: unknown) => console.log(data));
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async signin(data: ApiAuthSignIn) {
        try {
            await this.#api.signin(data).then(data => {
                const response = data as XMLHttpRequest;
                if (response.status !== 200) {
                    const responseText = JSON.parse(response.responseText);
                    alert(`Oops, something went wrong: ${responseText.reason}`);
                    return;
                }
                router.load('messenger');
            });
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async request() {
        try {
            await this.#api.request().then((data: unknown) => console.log(data));
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async logout() {
        try {
            await this.#api.logout().then((data: unknown) => console.log(data));
        } catch (e: any) {
            console.error(e.message);
        }
    }
}
