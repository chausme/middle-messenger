import AuthAPI from '../api/auth-api';
import { ApiAuthSignIn } from '~/src/utils/prop-types';
import store, { StoreEvents } from '~/src/utils/store';
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
            await this.#api.signin(data).then(async data => {
                const response = data as XMLHttpRequest;
                if (response.status !== 200) {
                    const responseText = JSON.parse(response.responseText);
                    alert(`Oops, something went wrong: ${responseText.reason}`);
                    return;
                }
                console.log('debug 1');
                await this.#api.request().then((data: unknown) => {
                    console.log('debug 2');
                    const response = data as XMLHttpRequest;
                    const responseText = JSON.parse(response.responseText);
                    console.log('debug 5');
                    if (response.status !== 200) {
                        console.log('debug 4');
                        console.log(response.status);
                        alert(`Oops, something went wrong: ${responseText.reason}`);
                        return;
                    }
                    console.log('debug 6');
                    console.log(responseText);
                    // store.set('user', responseText);
                    store.set('logged', true);
                    router.load('messenger');
                });
            });
        } catch (e: any) {
            console.log('debug 3');
            alert(`Oops, something went wrong: ${e.message}`);
            this.logout();
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
            store.set('logged', false);
            router.load('');
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }
}
