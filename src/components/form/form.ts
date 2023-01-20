// @ts-nocheck

import { Block } from '~/src/utils/block';
import template from './form.hbs';

export class Form extends Block {
    constructor(props) {
        super('form', props);

        if (!this.element) {
            return;
        }

        this.element.classList.add('h-100', 'd-flex', 'flex-column', 'justify-content-between');
        this.element.setAttribute('id', props.id);
        this.element.setAttribute('action', '#');
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
