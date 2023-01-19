import { signIn } from './modules/signin';
import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block';
import template from './home.hbs';
import { Button } from '~/src/components/button';
import './home.css';

export class PageHome extends Block {
    constructor(props: false | {}) {
        super('div', props);
    }

    render() {
        const btn = new Button({
            title: 'New button',
            link: '123',
            id: 'update_details',
            styles: ['bg-green'],
            events: {
                click: event => {
                    console.log(event);
                },
            },
            settings: { withInternalID: true },
        });
        return template({
            form: this.props.type === 'signUp' ? signUp : signIn,
            button: btn.getContent()?.outerHTML,
        });
    }
}
