const messagesAPIBase = 'WS';

export class MessagesAPI {
    static basePath = 'WS';

    connect(chatId: number, token: string) {
        return `connecting to chatId:${chatId}, token:${token}`;
    }
}
