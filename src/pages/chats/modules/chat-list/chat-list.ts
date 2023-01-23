// import Chat from './components/chat';
// import Avatar from '~/src/components/avatar';
// import SearchInput from './components/search-input';
// import ButtonIcon from '~/src/components/button-icon';

import Block from '~/src/utils/block';
import Button from '~/src/components/button';
import template from './chat-list.hbs';
import './chat-list.css';

export default class ChatList extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add('window', 'lg', 'p-2/5', 'chats', 'bg-pink', 'd-flex', 'h-100');
    }

    init() {
        this.children.button = new Button({
            title: 'Sign In',
            id: 'sign_in',
            styles: ['bg-green'],
            settings: { withInternalID: true },
        });
    }

    // props = {
    //     buttonIcon: ButtonIcon({
    //         title: 'Account',
    //         id: 'account',
    //         icon: 'hamburger',
    //         styles: 'mr-1/5 bg-green',
    //     }),
    //     SearchInput,
    //     chats: [
    //         Chat({
    //             title: 'Jake',
    //             Avatar: Avatar({
    //                 url: 'https://via.placeholder.com/60',
    //                 size: 'md',
    //             }),
    //             lastMessage:
    //                 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nam mollis efficitur commodo. Cras venenatis...',
    //             datetime: '2:14pm',
    //             unread: 2,
    //         }),
    //         Chat({
    //             title: 'Kate',
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessage: 'Curabitur posuere ipsum nec orc!',
    //             own: true,
    //             datetime: '10:10am',
    //             unread: 1,
    //         }),
    //         Chat({
    //             title: 'English Club',
    //             Avatar: Avatar({
    //                 url: 'https://via.placeholder.com/60',
    //                 size: 'md',
    //             }),
    //             lastMessageSticker: true,
    //             datetime: 'Sun',
    //         }),
    //         Chat({
    //             title: 'Jerry',
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessage:
    //                 'Donec porta massa vel scelerisque vulputate. Aenean lectus orci, cursus ut ornare sit amet, aliquam non u',
    //             datetime: 'Fri',
    //         }),
    //         Chat({
    //             title: "Designer's Club",
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessageImage: true,
    //             datetime: 'Wed',
    //         }),
    //         Chat({
    //             title: 'Mary',
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessageSticker: true,
    //             own: true,
    //             datetime: 'Mon',
    //         }),
    //         Chat({
    //             title: 'Friends Group',
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessage: 'Etiam tincidunt ex ut eros fringilla, ut laoreet quis!',
    //             datetime: '9 Sep',
    //         }),
    //         Chat({
    //             title: 'Mike',
    //             Avatar: Avatar({
    //                 size: 'md',
    //             }),
    //             lastMessageImage: true,
    //             datetime: 'Dec 2021',
    //             own: true,
    //         }),
    //     ],
    // }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {});
    }
}
