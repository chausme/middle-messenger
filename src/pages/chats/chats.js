import chats from './modules/chats';
import singleChat from './modules/single-chat';
import template from './chats.hbs';

// @todo add sign up logic

export default (
    props = {
        chats: chats(),
        singleChat: singleChat(),
    }
) => template({ props });
