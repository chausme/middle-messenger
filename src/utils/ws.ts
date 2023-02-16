import store from '~/src/utils/store';

export class WS {
    static basePath = 'wss://ya-praktikum.tech/ws/chats';

    static connTimerDelay = 10000;

    #connTimer;

    #chatId: number | null;

    #socket: WebSocket | null;

    constructor() {
        this.#connTimer = store?.getState()?.connTimer;
        this.#chatId = null;
        this.#socket = null;
    }

    #setTimer(): void {
        const connTimer = setInterval(() => {
            console.log(`sending ping message for ${this.#chatId}`);
            if (!this.#socket) {
                return;
            }
            this.#socket.send(
                JSON.stringify({
                    type: 'ping',
                })
            );
        }, WS.connTimerDelay);
        store.set('connTimer', connTimer);
    }

    #getMessages() {
        console.log(`get old messages for ${this.#chatId}`);
        if (!this.#socket) {
            return;
        }
        this.#socket.send(JSON.stringify({ type: 'get old', content: '0' }));
    }

    sendMessage(message: string) {
        if (!this.#socket) {
            return;
        }
        this.#socket.send(JSON.stringify({ type: 'message', content: message }));
    }

    connect(chatId: number, token: string) {
        if (this.#connTimer) {
            clearInterval(this.#connTimer);
        }

        const userId = store?.getState()?.user?.id;
        this.#socket = new WebSocket(`${WS.basePath}/${userId}/${chatId}/${token}`);
        this.#chatId = Number(chatId);

        this.#socket.addEventListener('open', () => {
            console.log('Websocket connection has been established');
            // get old messages
            this.#getMessages();
        });

        this.#socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Websocket connection has been closed without issues');
            } else {
                console.warn('Websocket connection has been closed with issues');
            }

            console.log(`Code: ${event.code} | Reason: ${event.reason}`);
            // remove WS connection timer if exists to avoid pinging multiples chats
        });

        this.#socket.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            if (data.type === 'pong') {
                console.log(`pong: ${this.#chatId}`);
                return;
            }
            console.log('Received data', data);
            if (Array.isArray(data)) {
                store.set('messages', data.reverse());
            } else {
                console.log(data);
                const messages = store?.getState()?.messages;
                messages.push({ ...data, chat_id: this.#chatId });
                store.set('messages', messages);
            }
            store.set('chatId', this.#chatId);

            // scroll to the bottoom of messages
            const messagesWrap = document.querySelector('.messages');
            if (!messagesWrap) {
                return;
            }
            messagesWrap.scrollTop = messagesWrap.scrollHeight;
        });

        this.#socket.addEventListener('error', event => {
            console.log('Error', event);
        });

        this.#setTimer();
    }
}

export default new WS();
