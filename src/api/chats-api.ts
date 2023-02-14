import HTTP from '../utils/http';
import BaseAPI from './base-api';
import { UserProps } from '~/src/utils/prop-types';

const chatsAPIBase = new HTTP();

export class ChatsAPI extends BaseAPI {
    static basePath = `${BaseAPI.baseUrl}/chats`;

    request() {
        return chatsAPIBase.get(`${ChatsAPI.basePath}/`);
    }
}
