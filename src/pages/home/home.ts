import { signIn } from './modules/signin';
import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block';
import { Button } from '~/src/components/button';
import template from './home.hbs';
import './home.css';

interface PageHomeProps {
    title: string;
}

export class PageHome extends Block {
    constructor(props: PageHomeProps) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            title: 'New button',
            link: '123',
            id: 'update_details',
            styles: ['bg-green'],
            events: {
                click(event) {
                    console.log(event);
                },
            },
            settings: { withInternalID: true },
        });

        setTimeout(() => {
            // Update button title
            this.children.button.setProps({ title: 'Updated text on button' });
        }, 3000);
    }

    componentDidUpdate(oldProps, newProps) {
        if (oldProps.title !== newProps.title) {
            this.children.button.setProps({ title: newProps.title });
        }

        return true;
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            form: this.props.type === 'signUp' ? signUp : signIn,
            title: this.props.title,
        });
    }
}
