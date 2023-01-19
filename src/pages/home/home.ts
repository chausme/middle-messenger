import { signIn } from './modules/signin';
import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block';
import { Button } from '~/src/components/button';
import template from './home.hbs';
import './home.css';

export class PageHome extends Block {
    constructor() {
        super('div');
    }

    init() {
        this.children.button = new Button({
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
    }

    render() {
        this.dispatchComponentDidMount();
        return this.compile(template, {
            form: this.props.type === 'signUp' ? signUp : signIn,
        });
    }
}
