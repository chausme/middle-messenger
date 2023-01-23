import Block from '~/src/utils/block';
import { CallbackType } from '~src/utils/event-bus';
import template from './button.hbs';

type ButtonProps = {
    title: string;
    id: string;
    styles: string[];
    link: string;
    settings?: { withInternalID?: boolean };
    events: Record<string, CallbackType>;
};

export default class Button extends Block {
    constructor(props: ButtonProps) {
        super(props, 'button');

        if (!this.element) {
            return;
        }

        // add default classes
        this.element.classList.add('button', 'window', 'sm', 'p-0/5', 'pad', 'text-center');
        this.element.setAttribute('id', props.id);

        // check for provided styles and add if any
        if (props.styles) {
            props.styles.forEach(style => {
                if (this.element) {
                    this.element.classList.add(style);
                }
            });
        }

        // add optional link class
        if (props.link) {
            this.element.classList.add('link');
            this.element.dataset.path = props.link;
        }
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
