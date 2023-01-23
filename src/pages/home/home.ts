import Block from '~/src/utils/block';
import Button from '~/src/components/button';
// import { Form } from '~/src/components/form';
// import { InputWLabel } from '~/src/components/input-w-label';
import template from './home.hbs';
import './home.css';

type PageHomeProps = {
    title?: string;
    type: string;
};

export default class PageHome extends Block {
    constructor(props: PageHomeProps) {
        super(props, 'div');

        this.element.classList.add('window', 'lg', 'p-2/5', 'auth', 'w-fixed');

        if (this.props.type === 'signIn') {
            this.props.title = 'Sign In';
            this.element.classList.add('signin', 'bg-orange');
        } else if (this.props.type === 'signUp') {
            this.props.title = 'Sign Up';
            this.element.classList.add('signup', 'bg-pink');
        }
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

        // if (this.props.type === 'signIn') {
        //     this.children.form = new Form({
        //         id: 'sign-in',
        //         inputs: [
        //             new InputWLabel({
        //                 title: 'Login',
        //                 id: 'login',
        //                 type: 'text',
        //             }),
        //         ],
        //     });
        // }
        // else if (this.props.type === 'signUp') {
        // }

        setTimeout(() => {
            // Update button title
            this.children.button.setProps({ title: 'Updated text on button' });
        }, 3000);
    }

    componentDidUpdate(oldProps: { title: string }, newProps: { title: string }) {
        if (oldProps.title !== newProps.title) {
            this.children.button.setProps({ title: newProps.title });
        }

        return true;
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            title: this.props.title,
        });
    }
}
