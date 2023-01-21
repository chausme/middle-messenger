import chatsList from './modules/chats-list';
import singleChat from './modules/single-chat';
import template from './chats.hbs';
import * as classes from './chats.module.css';

// @todo add sign up logic

export default pageChats = (
    props = {
        chatsList,
        singleChat,
    }
) => template({ props, classes });
