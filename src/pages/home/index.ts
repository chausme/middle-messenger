// import { signIn } from './modules/signin';
// import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block.js';
import template from './home.hbs';
import { ButtonNew } from '../../components/button-new';
import './home.css';

export class PageHome extends Block {
    constructor() {
        super('div');
    }

    render() {
        const btn = new ButtonNew({
            title: 'New button',
            link: '123',
            id: 'update_details',
            styles: ['bg-green'],
            events: {
                click: event => {
                    console.log(event);
                },
            },
        });
        return template({
            buttonNew: btn.getContent()?.outerHTML,
        });
    }
}

// const pageHome = (type: string) => {
//     if (type && type === 'signUp') {
//         return signUp();
//     }
//     return signIn();
// };
