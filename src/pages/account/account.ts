import Block from '~/src/utils/block';
import Form from '~/src/components/form';
import Avatar from '~/src/components/avatar';
import imageAvatarLarge from '~/static/images/120.png';
import ButtonIcon from '~/src/components/button-icon';
import Button from '~/src/components/button';
import InputWLabel from '~/src/components/input-w-label';
import router from '~/src/index';
import validator from '~/src/utils/validator';
import { AuthController } from '~/src/controllers/auth-controller';
import store, { StoreEvents } from '~src/utils/store';
import template from './account.hbs';
import * as classes from './account.module.css';

export default class PageAccount extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add('window', 'w-fixed', 'lg', 'account', 'bg-cyan');

        store.on(StoreEvents.Updated, () => {
            const displayName = store.getState()?.user?.display_name;
            this.setProps({ displayName });
        });
    }

    init() {
        const auth = new AuthController();
        this.children.buttonBack = new ButtonIcon({
            title: 'Back to chats',
            id: 'messenger',
            icon: 'back',
            css: ['bg-orange'],
            link: 'messenger',
            events: {
                click(e) {
                    e.preventDefault();
                    router.load('messenger');
                },
            },
        });
        this.children.avatar = new Avatar({
            url: imageAvatarLarge,
            size: 'lg',
            css: ['mb-2'],
        });
        this.children.form = new Form({
            id: 'account',
            events: {
                submit(e) {
                    e.preventDefault();
                    const isValid = validator(e);
                    if (isValid) {
                        const formData = new FormData(e.target);
                        const formProps = Object.fromEntries(formData);
                        console.log('submitting form');
                        console.log(formProps);
                    }
                },
                blur(e) {
                    validator(e);
                },
                focus(e) {
                    validator(e);
                },
            },
            inputs: [
                new InputWLabel({
                    title: 'Email',
                    id: 'email',
                    type: 'email',
                    value: 'user123@gmail.com',
                    settings: {
                        disabled: true,
                    },
                }),
                new InputWLabel({
                    title: 'Login',
                    id: 'login',
                    type: 'text',
                    value: 'user123',
                    settings: {
                        disabled: true,
                    },
                }),
                new InputWLabel({
                    title: 'First Name',
                    id: 'first_name',
                    type: 'text',
                    value: 'Jack',
                    settings: {
                        disabled: true,
                    },
                }),
                new InputWLabel({
                    title: 'Last Name',
                    id: 'second_name',
                    type: 'text',
                    value: 'Jackson',
                    settings: {
                        disabled: true,
                    },
                }),
                new InputWLabel({
                    title: 'Phone',
                    id: 'phone',
                    type: 'tel',
                    value: '+84 123 123 123',
                    settings: {
                        disabled: true,
                    },
                }),
                new InputWLabel({
                    title: 'Display Name',
                    id: 'display_name',
                    type: 'text',
                    value: 'Jack J',
                    settings: {
                        disabled: true,
                    },
                }),
            ],
            buttons: [
                new Button({
                    title: 'Update details',
                    id: 'update_details',
                    action: 'update-details',
                    css: ['bg-green'],
                    events: {
                        click(e) {
                            e.preventDefault();
                            const form = this.closest('form');
                            const inputs = form.querySelectorAll('input');
                            inputs.forEach((el: HTMLInputElement) => {
                                el.removeAttribute('disabled');
                            });
                            console.log('update details');
                        },
                    },
                }),
                new Button({
                    title: 'Change Password',
                    id: 'change_password',
                    css: ['bg-pink'],
                    action: 'change-password',
                    events: {
                        click(e) {
                            e.preventDefault();
                            console.log('change password');
                        },
                    },
                }),
                new Button({
                    title: 'Log Out',
                    id: 'logout',
                    css: ['bg-cyan'],
                    link: '/',
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

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            ...this.props,
            classes,
        });
    }
}
