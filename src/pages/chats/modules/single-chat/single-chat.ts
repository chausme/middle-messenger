import Avatar from '~/src/components/avatar';
import Header from './components/header';
import Message from './components/message';
import FormMessage from './modules/form-message';
import Empty from './components/empty';
import store, { StoreEvents } from '~/src/utils/store';
import Block from '~/src/utils/block';
import template from './single-chat.hbs';
import './single-chat.css';

export default class SingleChat extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add(
            'window',
            'lg',
            'p-2/5',
            'single-chat',
            'bg-orange-light',
            'd-flex',
            'h-100'
        );

        store.on(StoreEvents.Updated, () => {
            const displayName = store.getState()?.user?.display_name;
            this.setProps({ displayName });
        });
    }

    init() {
        this.children.placeholder = new Empty();
    }

    componentDidUpdate(): boolean {
        const state = store?.getState();
        const messages = state?.messages;
        const chatId = state?.chatId;
        const chats = state?.chats;
        if (!messages) {
            return false;
        }
        console.log('showing messages...');
        // get selected chat title
        // const currentChat = chats ? chats.filter(chat => chat.id === chatId));

        this.children.header = new Header({
            avatar: new Avatar({
                size: 'sm',
            }),
            title: 'TBC',
        });
        this.children.form = new FormMessage({
            id: 'send-message',
        });
        delete this.children.placeholder;

        return true;
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {});
    }
}
