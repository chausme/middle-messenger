import { Block } from '~/src/utils/block.js';
import template from './button-new.hbs';
export default class ButtonNew extends Block {
    constructor(props) {
        super('button', props);

        // add default classes
        this.element.classList.add('button', 'window', 'sm', 'p-0/5', 'pad', 'text-center');

        // check for provided styles and add if any
        if (props.styles) {
            props.styles.forEach(style => {
                console.log(style);
                this.element.classList.add(style);
            });
        }

        // add optional linl class
        if (props.link) {
            this.element.classList.add('link');
        }
    }

    render() {
        return template({ props: this.props });
    }
}
