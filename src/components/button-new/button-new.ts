import { Block } from '~/src/utils/block';
import template from './button-new.hbs';
export class ButtonNew extends Block {
    constructor(props) {
        super('button', props);

        // add default classes
        this.element.classList.add('button', 'window', 'sm', 'p-0/5', 'pad', 'text-center');

        this.element.setAttribute('id', props.id);

        // check for provided styles and add if any
        if (props.styles) {
            props.styles.forEach(style => {
                this.element.classList.add(style);
            });
        }

        // add optional link class
        if (props.link) {
            this.element.classList.add('link');
            this.element.dataset.path = props.link;
        }
    }

    render() {
        return template({ props: this.props });
    }
}
