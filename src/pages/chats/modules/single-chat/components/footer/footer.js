import ButtonIcon from '~/src/components/button-icon';
import InputMessage from '../input-message';
import template from './footer.hbs';

export default (props = {}) =>
    template({
        props,
        InputMessage,
        buttonAttach: ButtonIcon({
            title: 'Attach',
            id: 'attach',
            icon: 'attachment',
            styles: 'mr-1/5 bg-orange',
        }),
        buttonSend: ButtonIcon({
            title: 'Send',
            id: 'send',
            icon: 'arrow',
            styles: 'ml-1/5 bg-pink',
        }),
    });
