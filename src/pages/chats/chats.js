import chatsList from './modules/chats-list';
import singleChat from './modules/single-chat';
import template from './chats.hbs';

// @todo add sign up logic

export default (
    props = {
        chatsList,
        singleChat,
    }
) => template({ props });
