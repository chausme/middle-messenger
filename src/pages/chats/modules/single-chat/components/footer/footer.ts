import Block from '~/src/utils/block';
import ButtonIcon from '~/src/components/button-icon';
import InputMessage from '../input-message';
// import { FooterProps } from '~/src/utils/prop-types';
import template from './footer.hbs';

export default class Header extends Block {
    constructor() {
        super({}, 'footer');

        if (!this.element) {
            return;
        }

        // add default classes
        this.element.classList.add('window', 'bg-green', 'py-2');
    }

    init() {
        this.children.buttonAttach = new ButtonIcon({
            title: 'Attach',
            id: 'attach',
            icon: 'attachment',
            styles: ['mr-1/5', 'bg-orange'],
            events: {
                click(e) {
                    e.preventDefault();
                    console.log('attach something');
                },
            },
        });
        this.children.inputMessage = new InputMessage();
        this.children.buttonSend = new ButtonIcon({
            title: 'Send',
            id: 'send',
            icon: 'arrow',
            styles: ['ml-1/5', 'bg-pink'],
            events: {
                click(e) {
                    e.preventDefault();
                    const messageEl = document.querySelector('#message') as HTMLInputElement;
                    const message = messageEl.value;
                    console.log({ message });
                },
            },
        });
    }

    render() {
        return this.compile(template, {});
    }
}
