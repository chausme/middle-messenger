import Block from '~/src/utils/block';
import Button from '~/src/components/button';
import Form from '~/src/components/form';
import InputWLabel from '~/src/components/input-w-label';
import router from '~/src/index';
import { AuthController } from '~/src/controllers/auth-controller';
import template from './sign-in.hbs';
import store, { StoreEvents } from '~/src/utils/store';

export default class PageSignIn extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add(
            'window',
            'lg',
            'p-2/5',
            'auth',
            'w-fixed',
            'signin',
            'bg-orange'
        );
    }

    init() {
        console.log('init');

        store.on(StoreEvents.Updated, () => {
            this.setProps({ ...store.getState() });
        });

        const auth = new AuthController();
        if (store.getState()?.logged) {
            this.children.warn = '123';
        } else {
            this.children.form = new Form({
                id: 'form-sign-in',
                inputs: [
                    new InputWLabel({
                        title: 'Login',
                        id: 'login',
                        type: 'text',
                    }),
                    new InputWLabel({
                        title: 'Password',
                        id: 'password',
                        type: 'password',
                    }),
                ],
                buttons: [
                    new Button({
                        title: 'Sign In',
                        id: 'sign-in',
                        css: ['bg-green'],
                    }),
                    new Button({
                        title: 'Sign Up',
                        id: 'sign-up',
                        css: ['bg-orange'],
                        link: 'signup',
                        events: {
                            click(e) {
                                e.preventDefault();
                                router.load('sign-up');
                            },
                        },
                    }),
                    new Button({
                        title: 'Log Out',
                        id: 'logout',
                        css: ['bg-orange'],
                        link: '',
                        events: {
                            async click(e) {
                                e.preventDefault();
                                await auth.logout();
                            },
                        },
                    }),
                ],
            });
        }
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            ...this.props,
        });
    }
}
