import Block from '~/src/utils/block';
import { InputProps } from '~/src/utils/prop-types';
import validator from '~/src/utils/validator';
import template from './input-w-label.hbs';
import * as classes from './input-w-label.module.css';

export default class InputWLabel extends Block {
    constructor(props: InputProps) {
        props.events = {
            blur(e) {
                validator(e);
            },
            focus(e) {
                validator(e);
            },
        };

        super(props, 'div');

        if (!this.element) {
            return;
        }

        this.element.classList.add('input-w-label');

        this.addTargetEvents('input');
    }

    render() {
        return this.compile(template, { ...this.props, classes });
    }
}
