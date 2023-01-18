// @ts-ignore
import { avatar } from '~/src/components/avatar';
// @ts-ignore
import { buttonIcon } from '~/src/components/button-icon';
// @ts-ignore
import { button } from '~/src/components/button';

import { ButtonNew } from '~/src/components/button-new';

// @ts-ignore
import { inputWLabel } from '~/src/components/input-w-label';
import template from './account.hbs';
// @ts-ignore
import * as classes from './account.module.css';

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    // Dispatch i.e. emit "componentDidMount" event
    block.dispatchComponentDidMount();
    return root;
}

const buttonNew = new ButtonNew({
    title: 'New button',
    link: '',
    styles: ['bg-green', 'text-white'],
});

setTimeout(() => {
    render('.avatar-lg', buttonNew);
}, 3000);

export default (
    props = {
        displayName: 'Jack J',
        avatar: avatar({
            url: 'https://via.placeholder.com/120',
            size: 'lg',
            styles: 'mb-2',
        }),
        buttonBack: buttonIcon({
            title: 'Back to chats',
            id: 'chats',
            icon: 'back',
            styles: 'bg-orange',
        }),
        // buttonNew: buttonNew({
        //     title: 'New button',
        //     id: 'update_details',
        //     styles: 'bg-green',
        //     link: '',
        // }),
        inputs: {
            email: inputWLabel({
                title: 'Email',
                id: 'email',
                type: 'email',
                value: 'user123@gmail.com',
                disabled: true,
            }),
            login: inputWLabel({
                title: 'Login',
                id: 'login',
                type: 'text',
                value: 'user123',
                disabled: true,
            }),
            firstName: inputWLabel({
                title: 'First Name',
                id: 'first_name',
                type: 'text',
                value: 'Jack',
                disabled: true,
            }),
            lastName: inputWLabel({
                title: 'Last Name',
                id: 'second_name',
                type: 'text',
                value: 'Jackson',
                disabled: true,
            }),
            phone: inputWLabel({
                title: 'Phone',
                id: 'phone',
                type: 'tel',
                value: '+84 123 123 123',
                disabled: true,
            }),
            displayName: inputWLabel({
                title: 'Display Name',
                id: 'display_name',
                type: 'text',
                value: 'Jack J',
                disabled: true,
            }),
        },
        buttons: {
            updateDetails: button({
                title: 'Update details',
                id: 'update_details',
                styles: 'bg-green',
                link: '',
            }),
            changePassword: button({
                title: 'Change Password',
                id: 'change_password',
                styles: 'bg-pink',
                link: '',
            }),
            logOut: button({
                title: 'Log Out',
                id: 'logout',
                styles: 'bg-cyan',
                link: '/',
            }),
        },
    }
) => template({ props, classes });
