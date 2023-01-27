import Block from '~/src/utils/block';
import Form from '~/src/components/form';
import Avatar from '~/src/components/avatar';
import imageAvatarLarge from '~/static/images/120.png';
import ButtonIcon from '~/src/components/button-icon';
import Button from '~/src/components/button';
import InputWLabel from '~/src/components/input-w-label';
import router from '~/src/index';
import validator from '~/src/utils/validator';
import template from './account.hbs';
import * as classes from './account.module.css';

export default class PageAccount extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add('window', 'w-fixed', 'lg', 'account', 'bg-cyan');

        this.props.displayName = 'Jack J';
    }

    init() {
        this.children.buttonBack = new ButtonIcon({
            title: 'Back to chats',
            id: 'chats',
            icon: 'back',
            styles: ['bg-orange'],
            link: 'chats',
            events: {
                click(e) {
                    e.preventDefault();
                    router.load('chats', true);
                },
            },
        });
        this.children.avatar = new Avatar({
            url: imageAvatarLarge,
            size: 'lg',
            styles: ['mb-2'],
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
                }),
                new InputWLabel({
                    title: 'Login',
                    id: 'login',
                    type: 'text',
                    value: 'user123',
                }),
                new InputWLabel({
                    title: 'First Name',
                    id: 'first_name',
                    type: 'text',
                    value: 'Jack',
                }),
                new InputWLabel({
                    title: 'Last Name',
                    id: 'second_name',
                    type: 'text',
                    value: 'Jackson',
                }),
                new InputWLabel({
                    title: 'Phone',
                    id: 'phone',
                    type: 'tel',
                    value: '+84 123 123 123',
                }),
                new InputWLabel({
                    title: 'Display Name',
                    id: 'display_name',
                    type: 'text',
                    value: 'Jack J',
                }),
            ],
            buttons: [
                new Button({
                    title: 'Update details',
                    id: 'update_details',
                    styles: ['bg-green'],
                }),
                new Button({
                    title: 'Change Password',
                    id: 'change_password',
                    styles: ['bg-pink'],
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
                    styles: ['bg-cyan'],
                    link: '/',
                    events: {
                        click(e) {
                            e.preventDefault();
                            router.load('', true);
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
