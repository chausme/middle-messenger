import store from '~/src/utils/store';

export class MessagesAPI {
    static basePath = 'wss://ya-praktikum.tech/ws/chats';

    connect(chatId: number, token: string): NodeJS.Timer {
        const userId = store?.getState()?.user?.id;
        const socket = new WebSocket(`${MessagesAPI.basePath}/${userId}/${chatId}/${token}`);

        socket.addEventListener('open', () => {
            console.log('Websocket connection has been established');
        });

        socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Websocket connection has been closed without issues');
            } else {
                console.warn('Websocket connection has been close with issues');
            }

            console.log(`Code: ${event.code} | Reason: ${event.reason}`);
        });

        socket.addEventListener('message', event => {
            console.log('Received data', event.data);
        });

        socket.addEventListener('error', event => {
            console.log('Error', event.message);
        });

        return setInterval(() => {
            console.log('sending ping message for ' + chatId);
            socket.send(
                JSON.stringify({
                    type: 'ping',
                })
            );
        }, 5000);
    }
}
