// @ts-nocheck

import { Block } from '~/src/utils/block';
import template from './form.hbs';

export class Form extends Block {
    constructor(props) {
        super('form', props);

        if (!this.element) {
            return;
        }
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
