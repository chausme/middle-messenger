import Block from '~/src/utils/block';
import Chat from './components/chat';
import Avatar from '~/src/components/avatar';
import InputSearch from './components/input-search';
import ButtonIcon from '~/src/components/button-icon';
import router from '~/src/index';
import template from './chat-list.hbs';
import { ChatApiProps } from '~/src/utils/prop-types';
import store, { StoreEvents } from '~/src/utils/store';
import { getDate, trimMessage } from '~/src/utils/helpers';
import './chat-list.css';

export default class ChatList extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add('window', 'lg', 'p-2/5', 'chats', 'bg-pink', 'd-flex', 'h-100');
        store.on(StoreEvents.Updated, () => {
            const chats = store.getState()?.chats;
            this.setProps({ chats: chats });
        });
    }

    init() {
        this.children.buttonAccount = new ButtonIcon({
            title: 'Account',
            id: 'settings',
            icon: 'hamburger',
            css: ['mr-1/5', 'bg-green'],
            settings: {
                withInternalID: true,
            },
            events: {
                click(e) {
                    e.preventDefault();
                    router.load('settings');
                },
            },
        });
        this.children.inputSearch = new InputSearch();
        this.children.buttonAddChat = new ButtonIcon({
            title: 'Add Chat',
            id: 'add-chat',
            icon: 'hamburger',
            css: ['ml-1/5', 'bg-orange'],
            action: 'add-chat',
            settings: {
                withInternalID: true,
            },
            events: {
                click(e) {
                    e.preventDefault();
                    console.log('add chat');
                },
            },
        });
        this.children.chats = [];
    }

    componentDidUpdate(): boolean {
        const chats = store?.getState()?.chats;
        if (!chats) {
            return false;
        }
        chats.forEach((chat: ChatApiProps) => {
            const datetimeRaw = chat?.last_message?.time
                ? Date.parse(chat?.last_message?.time)
                : null;
            const date = datetimeRaw ? getDate(datetimeRaw) : null;
            const lastMessage = chat?.last_message?.content
                ? trimMessage(chat.last_message.content)
                : null;
            this.children.chats.push(
                new Chat({
                    title: chat.title,
                    avatar: new Avatar({
                        size: 'md',
                    }),
                    unread: chat.unread_count ? chat.unread_count : 99, // keep for demoing purposes
                    datetime: date,
                    lastMessage,
                })
            );
        });
        return true;
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {});
    }
}
