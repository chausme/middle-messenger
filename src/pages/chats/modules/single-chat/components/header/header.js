import buttonIcon from '~/src/components/button-icon/buttonIcon';
import template from './header.hbs';

export default (props = {}) =>
    template({
        props,
        buttonIcon: buttonIcon({
            title: 'Account',
            id: 'account',
            icon: 'hamburger',
            styles: 'mr-1/5 bg-green',
        }),
    });
