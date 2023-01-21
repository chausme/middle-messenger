import Block from '~/src/utils/block';
import template from './input.hbs';

export default class Input extends Block {
    constructor(props) {
        super('div', props);

        if (!this.element) {
            return;
        }

        this.element.classList.add('input-wrap', 'window', 'p-0/5', 'sm', 'bg-gray-light');
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
