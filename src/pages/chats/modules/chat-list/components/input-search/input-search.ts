import Block from '~/src/utils/block';
import * as classes from './input-search.module.css';
import template from './input-search.hbs';

export default class InputSearch extends Block {
    constructor() {
        super({}, 'div');

        if (!this.element) {
            return;
        }

        // add default classes
        this.element.classList.add(
            'input-wrap',
            'input-search',
            'window',
            'sm',
            'bg-gray-light',
            classes['input-search']
        );
    }

    render() {
        return this.compile(template, {});
    }
}
