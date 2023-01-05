import header from './components/header';
import empty from './components/empty';
import message from './components/message';
import messageImage from './components/message-image';
import date from './components/date';
import footer from './components/footer';
import template from './single-chat.hbs';
import './single-chat.css';

const data = {
    title: 'Jerry',
};

/** @todo refactor when get data from API */
export default (
    props = {
        header: header({
            avatar: 'https://via.placeholder.com/60',
            title: data.title,
        }),
        date: date({
            date: 'Jan 20',
        }),
        messages: [
            {
                message: message({
                    content:
                        'Pellentesque congue imperdiet urna non eleifend. In eu odio finibus pretium nisl non, gravida nunc. Cras faucibus in arcu et pulvinar. Mauris tincidunt accumsan convalli.<br /><br />Curabitur posuere ipsum nec orci auctor blandit. Nam at odio elementum, hendrerit ex aliquet, congue elit. Praesent tincidunt vestibulum lacinia. Nunc vehicula at mauris a consectetur.<br /><br />Vestibulum imperdiet tortor mauris, eu cursus lacus dignissim.',
                    datetime: '2:14pm',
                    styles: 'bg-green-light',
                }),
            },
            {
                message: messageImage({
                    image: 'https://via.placeholder.com/300x200',
                    datetime: '2:18pm',
                }),
            },
            {
                message: message({
                    content:
                        'Pellentesque congue imperdiet urna non eleifend. In eu odio finibus pretium nisl non, gravida nunc. Cras faucibus in arcu et pulvinar. Mauris tincidunt accumsan convalli.<br /><br />Curabitur posuere ipsum nec orci auctor blandit. Nam at odio elementum, hendrerit ex aliquet, congue elit. Praesent tincidunt vestibulum lacinia. Nunc vehicula at mauris a consectetur.<br /><br />Vestibulum imperdiet tortor mauris, eu cursus lacus dignissim.',
                    datetime: '2:22pm',
                    styles: 'bg-green-light',
                }),
            },
        ],
        footer,
    }
) => template({ props });
