import buttonIcon from '~/src/components/button-icon/buttonIcon';
import template from './account.hbs';
import * as classes from './account.module.css';

export default (
    props = {
        buttonBack: buttonIcon({
            title: 'Back to chats',
            id: 'chats',
            icon: 'back',
            styles: 'bg-orange',
        }),
        avatar: 'https://via.placeholder.com/120',
        email: 'user123@gmail.com',
        login: 'user123',
        fistName: 'Jack',
        lastName: 'Jackson',
        phone: '+84 123 123 123',
        displayName: 'Jack J',
    }
) => template({ props, classes });
