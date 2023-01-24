import Avatar from '~/src/components/avatar';
import Header from './components/header';
import Datetime from './components/datetime';
import Message from './components/message';
// import MessageImage from './components/message-image';
// import MessageSticker from './components/message-sticker';
// import Footer from './components/footer';
import Block from '~/src/utils/block';
import template from './single-chat.hbs';
import './single-chat.css';

export default class SingleChat extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add(
            'window',
            'lg',
            'p-2/5',
            'single-chat',
            'bg-orange-light',
            'd-flex',
            'h-100'
        );
    }

    init() {
        this.children.header = new Header({
            avatar: new Avatar({
                url: 'https://via.placeholder.com/60',
                size: 'sm',
            }),
            title: 'Jerry',
        });
        this.children.datetime = new Datetime({
            date: 'Jun 20',
        });
        this.children.message_1 = new Message({
            content:
                'Pellentesque congue imperdiet urna non eleifend. In eu odio finibus pretium nisl non, gravida nunc. Cras faucibus in arcu et pulvinar. Mauris tincidunt accumsan convalli.<br /><br />Curabitur posuere ipsum nec orci auctor blandit. Nam at odio elementum, hendrerit ex aliquet, congue elit. Praesent tincidunt vestibulum lacinia. Nunc vehicula at mauris a consectetur.<br /><br />Vestibulum imperdiet tortor mauris, eu cursus lacus dignissim.',
            datetime: '2:14pm',
        });
        this.children.message_2 = new Message({
            content:
                'Pellentesque congue imperdiet urna non eleifend. In eu odio finibus pretium nisl non, gravida nunc. Cras faucibus in arcu et pulvinar. Mauris tincidunt accumsan convalli.<br /><br />Curabitur posuere ipsum nec orci auctor blandit. Nam at odio elementum, hendrerit ex aliquet, congue elit. Praesent tincidunt vestibulum lacinia. Nunc vehicula at mauris a consectetur.<br /><br />Vestibulum imperdiet tortor mauris, eu cursus lacus dignissim.',
            datetime: '2:14pm',
            own: true,
        });
    }

    // props = {
    //     messages: [
    //         {
    //             message: MessageImage({
    //                 image: 'https://via.placeholder.com/300x200',
    //                 datetime: '2:18pm',
    //             }),
    //         },
    //         {
    //             message: Message({
    //                 content: 'Cool!',
    //                 datetime: '2:20pm',
    //                 own: true,
    //             }),
    //         },
    //         {
    //             message: MessageSticker({
    //                 sticker: 'smile',
    //                 datetime: '2:21pm',
    //                 own: true,
    //             }),
    //         },
    //         {
    //             message: MessageImage({
    //                 image: 'https://via.placeholder.com/300x200',
    //                 datetime: '2:30pm',
    //                 own: true,
    //             }),
    //         },
    //     ],
    //     Footer,
    // }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {});
    }
}
