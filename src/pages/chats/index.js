import chats from './modules/chats';
import singleChat from './modules/single-chat';

export default () => {
    return chats() + singleChat();
};
