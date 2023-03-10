import { AuthAPI } from '../api/auth-api';
import { ChatsController } from './chats-controller';
import { UserSignInProps, UserSignUpProps } from '@utils/prop-types';
import { processResponse } from '@utils/helpers';
import store from '@utils/store';

export class AuthController {
    #api = new AuthAPI();

    async signup(data: UserSignUpProps) {
        try {
            const response = (await this.#api.signup(data)) as XMLHttpRequest;
            const responseText = processResponse(response);
            if (!responseText) {
                return;
            }
            // set user data and redirect to /messenger
            await this.getUser();
            const chats = new ChatsController();
            await chats.request();
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async signin(data: UserSignInProps) {
        try {
            const response = (await this.#api.signin(data)) as XMLHttpRequest;
            const responseText = processResponse(response);
            if (!responseText) {
                return;
            }
            // set user data and redirect to /messenger
            await this.getUser();
            const chats = new ChatsController();
            await chats.request();
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async getUser() {
        try {
            const response = (await this.#api.request()) as XMLHttpRequest;
            const responseText = processResponse(response, false);
            if (!responseText) {
                return false;
            }
            store.set('user', responseText);
            return responseText;
        } catch (e: any) {
            console.error(e.message);
            return false;
        }
    }

    async logout() {
        try {
            await this.#api.logout();
            store.set('user', null);
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }
}
