import ChatList from './modules/chat-list';
import SingleChat from './modules/single-chat';
import template from './chats.hbs';
import * as classes from './chats.module.css';

// @todo add sign up logic

export default (
    props = {
        ChatList,
        SingleChat,
    }
) => template({ props, classes });
