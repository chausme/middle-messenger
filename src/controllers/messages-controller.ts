import { WS } from '../utils/ws';
import { ChatsAPI } from '../api/chats-api';
import store from '~/src/utils/store';

export class MessagesController {
    #ws = new WS();
    #chatsApi = new ChatsAPI();

    async #getChatToken(chatId: number) {
        const response = (await this.#chatsApi.getChatToken(chatId)) as XMLHttpRequest;
        /** @todo add common function */
        const responseText = JSON.parse(response.response);
        if (response.status !== 200) {
            const { reason } = responseText;
            console.warn(`Oops, something went wrong: ${reason}`);
            alert(`Oops, something went wrong: ${reason}`);
            return;
        }
        if (!responseText.token) {
            console.warn(`Oops, there is no chat token`);
            alert(`Oops, there is no chat token`);
            return;
        }
        return responseText.token;
    }

    async connect(chatId: number, token: string) {
        try {
            // establish WS connection and store the timer
            this.#ws.connect(chatId, token);
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async loadMessages(chatId: number) {
        try {
            // get chat token
            const token = await this.#getChatToken(chatId);

            if (!token) {
                console.warn(`Oops, there is no chat token`);
                alert(`Oops, there is no chat token`);
                return;
            }
            // establish connection
            const connection = await this.connect(chatId, token);
            console.log(connection);
            return;

            /** @todo replace with state management to avoid oldschool frontend override */
            const messagesWrap = document.querySelector('.messages');
            if (!messagesWrap) {
                return;
            }
            messagesWrap.innerHTML = '';
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }
}
