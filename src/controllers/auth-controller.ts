import AuthAPI from '../api/auth-api';

export class AuthController {
    #api = new AuthAPI();

    async signup() {
        try {
            await this.#api.signup().then((data: unknown) => console.log(data));
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async signin() {
        try {
            await this.#api.signin().then((data: unknown) => console.log(data));
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
