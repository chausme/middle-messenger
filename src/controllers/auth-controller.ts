import AuthAPI from '../api/auth-api';
import { ApiAuthSignIn } from '~/src/utils/prop-types';
import store from '~/src/utils/store';
import router from '~/src/index';

export class AuthController {
    #api = new AuthAPI();

    /** @todo */
    async signup() {
        try {
            await this.#api.signup().then((data: unknown) => console.log(data));
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async signin(data: ApiAuthSignIn) {
        try {
            const loginResponse = (await this.#api.signin(data)) as XMLHttpRequest;
            if (loginResponse.status !== 200) {
                const responseText = JSON.parse(loginResponse.response);
                const reason = responseText.reason;
                console.warn(`Oops, something went wrong: ${reason}`);
                alert(`Oops, something went wrong: ${reason}`);
                return;
            }
            // set user data and redirect to /messenger
            await this.getUser();
            router.load('messenger');
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async getUser() {
        try {
            const userResponse = (await this.#api.request()) as XMLHttpRequest;
            if (userResponse.status !== 200) {
                console.warn(
                    `Oops, something went wrong with fetching user\nAre you logged out?\nCode: ${userResponse.status}`
                );
                return false;
            }
            const user = JSON.parse(userResponse.response);
            if (!user) {
                return;
            }
            store.set('logged', true);
            return user;
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async logout() {
        try {
            await this.#api.logout();
            store.set('logged', false);
            router.load('');
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }
}
