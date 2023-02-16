import WS from '../utils/ws';
import { ChatsAPI } from '../api/chats-api';
import { ChatsController } from './chats-controller';

export class MessagesController {
    #chatsApi = new ChatsAPI();

    async #getChatToken(chatId: number) {
        try {
            const response = (await this.#chatsApi.getChatToken(chatId)) as XMLHttpRequest;
            /** @todo add common function */
            const responseText = JSON.parse(response.response);
            if (response.status !== 200) {
                const { reason } = responseText;
                console.warn(`Oops, something went wrong: ${reason}`);
                alert(`Oops, something went wrong: ${reason}`);
                return false;
            }
            if (!responseText.token) {
                console.warn(`Oops, there is no chat token`);
                alert(`Oops, there is no chat token`);
                return false;
            }
            return responseText.token;
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
            return false;
        }
    }

    async sendMessage(message: string) {
        try {
            await WS.sendMessage(message);
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }

    async connect(chatId: number) {
        try {
            // get chat token
            const token = await this.#getChatToken(chatId);

            if (!token) {
                console.warn(`Oops, there is no chat token`);
                alert(`Oops, there is no chat token`);
                return;
            }

            // establish WS connection and load messages with a store update
            WS.connect(chatId, token);
        } catch (e: any) {
            alert(`Oops, something went wrong: ${e.message}`);
            console.error(e.message);
        }
    }
}
