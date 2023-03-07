import Block from '@utils/block';
import { ButtonProps } from '@utils/prop-types';
import template from './button.hbs';

export default class Button extends Block {
    constructor(props: ButtonProps) {
        super(props, 'button');

        if (!this.element) {
            return;
        }

        // add default classes
        this.element.classList.add('button', 'window', 'sm', 'p-0/5', 'pad', 'text-center');
        this.element.setAttribute('id', props.id);

        // add optional link class and path
        if (props.link) {
            this.element.classList.add('link');
            this.element.dataset.path = props.link;
        }

        // keep button as type="button" to avoid form submission
        if (props.link || props.action) {
            this.element.setAttribute('type', 'button');
        } else {
            this.element.setAttribute('type', 'submit');
        }
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
