// @ts-nocheck

import Block from '~/src/utils/block';
import template from './input-w-label.hbs';
import * as classes from './input-w-label.module.css';

export default class InputWLabel extends Block {
    constructor(props) {
        super('div', props);

        if (!this.element) {
            return;
        }

        this.element.classList.add('input-w-label');
    }

    render() {
        return this.compile(template, { ...this.props, classes });
    }
}
