import chat from './components/chat';
import searchInput from './components/search-input';
import buttonIcon from '~/src/components/button-icon/buttonIcon';
import template from './chats.hbs';
import './chats.css';

export default (
    props = {
        buttonIcon: buttonIcon({
            title: 'Account',
            id: 'account',
            icon: 'hamburger',
            styles: 'mr-1/5 bg-green',
        }),
        searchInput,
        chats: [
            chat({
                avatar: 'https://via.placeholder.com/60',
                title: 'Jake',
                lastMessage:
                    'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nam mollis efficitur commodo. Cras venenatis...',
                datetime: '2:14pm',
                unread: 2,
            }),
            chat({
                avatar: 'https://via.placeholder.com/60',
                title: 'Kate',
                lastMessage: 'Curabitur posuere ipsum nec orc!',
                own: true,
                datetime: '10:10am',
                unread: 1,
            }),
            chat({
                title: 'English Club',
                listMessageSticker: true,
                datetime: 'Sun',
            }),
            chat({
                title: 'Jerry',
                lastMessage:
                    'Donec porta massa vel scelerisque vulputate. Aenean lectus orci, cursus ut ornare sit amet, aliquam non u',
                datetime: 'Fri',
            }),
            chat({
                title: "Designer's Club",
                listMessageImage: true,
                datetime: 'Wed',
            }),
            chat({
                title: 'Mary',
                listMessageSticker: true,
                own: true,
                datetime: 'Mon',
            }),
            chat({
                title: 'Friends Group',
                lastMessage: 'Etiam tincidunt ex ut eros fringilla, ut laoreet quis!',
                datetime: '9 Sep',
            }),
            chat({
                title: 'Mike',
                listMessageImage: true,
                datetime: 'Dec 2021',
                own: true,
            }),
        ],
    }
) => template({ props });
