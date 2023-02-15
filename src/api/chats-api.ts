import HTTP from '../utils/http';
import BaseAPI from './base-api';

const chatsAPIBase = new HTTP();

export class ChatsAPI extends BaseAPI {
    static basePath = `${BaseAPI.baseUrl}/chats`;

    request() {
        return chatsAPIBase.get(`${ChatsAPI.basePath}/`);
    }

    getChatToken(chatId: number) {
        return chatsAPIBase.post(`${ChatsAPI.basePath}/token/${chatId}`);
    }
}
