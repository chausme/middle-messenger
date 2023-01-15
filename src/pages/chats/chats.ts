import chatsList from './modules/chats-list';
import singleChat from './modules/single-chat';
// @ts-ignore
import template from './chats.hbs';
// @ts-ignore
import * as classes from './chats.module.css';

// @todo add sign up logic

export default (
    props = {
        chatsList,
        singleChat,
    }
) => template({ props, classes });
