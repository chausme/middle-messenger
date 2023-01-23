import Chat from './components/chat';
import Avatar from '~/src/components/avatar';
import SearchInput from './components/search-input';
import ButtonIcon from '~/src/components/button-icon';
import template from './chats.hbs';
import './chats.css';

export default (
    props = {
        buttonIcon: ButtonIcon({
            title: 'Account',
            id: 'account',
            icon: 'hamburger',
            styles: 'mr-1/5 bg-green',
        }),
        SearchInput,
        chats: [
            Chat({
                title: 'Jake',
                Avatar: Avatar({
                    url: 'https://via.placeholder.com/60',
                    size: 'md',
                }),
                lastMessage:
                    'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nam mollis efficitur commodo. Cras venenatis...',
                datetime: '2:14pm',
                unread: 2,
            }),
            Chat({
                title: 'Kate',
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessage: 'Curabitur posuere ipsum nec orc!',
                own: true,
                datetime: '10:10am',
                unread: 1,
            }),
            Chat({
                title: 'English Club',
                Avatar: Avatar({
                    url: 'https://via.placeholder.com/60',
                    size: 'md',
                }),
                lastMessageSticker: true,
                datetime: 'Sun',
            }),
            Chat({
                title: 'Jerry',
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessage:
                    'Donec porta massa vel scelerisque vulputate. Aenean lectus orci, cursus ut ornare sit amet, aliquam non u',
                datetime: 'Fri',
            }),
            Chat({
                title: "Designer's Club",
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessageImage: true,
                datetime: 'Wed',
            }),
            Chat({
                title: 'Mary',
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessageSticker: true,
                own: true,
                datetime: 'Mon',
            }),
            Chat({
                title: 'Friends Group',
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessage: 'Etiam tincidunt ex ut eros fringilla, ut laoreet quis!',
                datetime: '9 Sep',
            }),
            Chat({
                title: 'Mike',
                Avatar: Avatar({
                    size: 'md',
                }),
                lastMessageImage: true,
                datetime: 'Dec 2021',
                own: true,
            }),
        ],
    }
) => template({ props });