import Block from '~/src/utils/block';
import Button from '~/src/components/button';
import Form from '~/src/components/form';
import InputWLabel from '~/src/components/input-w-label';
import { PageHomeProps } from '~/src/utils/prop-types';
import router from '~/src/index';
import template from './home.hbs';
import './home.css';

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
        if (this.props.type === 'signIn') {
            this.children.form = new Form({
                id: 'sign-in',
                inputs: [
                    new InputWLabel({
                        title: 'Login',
                        id: 'login',
                        type: 'text',
                        child: 'input',
                    }),
                    new InputWLabel({
                        title: 'Password',
                        id: 'password',
                        type: 'password',
                        child: 'input',
                    }),
                ],
                buttons: [
                    new Button({
                        title: 'Sign In',
                        id: 'sign_in',
                        css: ['bg-green'],
                    }),
                    new Button({
                        title: 'Sign Up',
                        id: 'sign_up',
                        css: ['bg-orange'],
                        link: 'signup',
                        events: {
                            click(e) {
                                e.preventDefault();
                                router.load('#signup', true);
                            },
                        },
                    }),
                ],
            });
        } else if (this.props.type === 'signUp') {
            this.children.form = new Form({
                id: 'sign-in',
                inputs: [
                    new InputWLabel({
                        title: 'Email',
                        id: 'email',
                        type: 'email',
                    }),
                    new InputWLabel({
                        title: 'Login',
                        id: 'login',
                        type: 'text',
                    }),
                    new InputWLabel({
                        title: 'First Name',
                        id: 'first_name',
                        type: 'text',
                    }),
                    new InputWLabel({
                        title: 'Last Name',
                        id: 'second_name',
                        type: 'text',
                    }),
                    new InputWLabel({
                        title: 'Phone',
                        id: 'phone',
                        type: 'tel',
                    }),
                    new InputWLabel({
                        title: 'Password',
                        id: 'password',
                        type: 'password',
                    }),
                    new InputWLabel({
                        title: 'Confirm password',
                        id: 'password_2',
                        type: 'password',
                    }),
                ],
                buttons: [
                    new Button({
                        title: 'Sign In',
                        css: ['bg-green'],
                        id: 'sign_in',
                        link: '',
                        events: {
                            click(e) {
                                e.preventDefault();
                                router.load('', true);
                            },
                        },
                    }),
                    new Button({
                        title: 'Sign Up',
                        css: ['bg-orange'],
                        id: 'sign_up',
                    }),
                ],
            });
        }
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            ...this.props,
            title: this.props.title,
        });
    }
}
