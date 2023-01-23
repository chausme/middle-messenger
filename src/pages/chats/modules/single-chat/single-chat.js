import Avatar from '~/src/components/avatar';
import Header from './components/header';
import Message from './components/message';
import MessageImage from './components/message-image';
import MessageSticker from './components/message-sticker';
import Datetime from './components/datetime';
import Footer from './components/footer';
import template from './single-chat.hbs';
import './single-chat.css';

const data = {
    title: 'Jerry',
};

/** @todo refactor when get data from API */
export default (
    props = {
        header: Header({
            avatar: Avatar({
                url: 'https://via.placeholder.com/60',
                size: 'sm',
            }),
            title: data.title,
        }),
        date: Datetime({
            date: 'Jun 20',
        }),
        messages: [
            {
                message: Message({
                    content:
                        'Pellentesque congue imperdiet urna non eleifend. In eu odio finibus pretium nisl non, gravida nunc. Cras faucibus in arcu et pulvinar. Mauris tincidunt accumsan convalli.<br /><br />Curabitur posuere ipsum nec orci auctor blandit. Nam at odio elementum, hendrerit ex aliquet, congue elit. Praesent tincidunt vestibulum lacinia. Nunc vehicula at mauris a consectetur.<br /><br />Vestibulum imperdiet tortor mauris, eu cursus lacus dignissim.',
                    datetime: '2:14pm',
                }),
            },
            {
                message: MessageImage({
                    image: 'https://via.placeholder.com/300x200',
                    datetime: '2:18pm',
                }),
            },
            {
                message: Message({
                    content: 'Cool!',
                    datetime: '2:20pm',
                    own: true,
                }),
            },
            {
                message: MessageSticker({
                    sticker: 'smile',
                    datetime: '2:21pm',
                    own: true,
                }),
            },
            {
                message: MessageImage({
                    image: 'https://via.placeholder.com/300x200',
                    datetime: '2:30pm',
                    own: true,
                }),
            },
        ],
        Footer,
    }
) => template({ props });
