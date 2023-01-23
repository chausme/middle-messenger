import Block from '~/src/utils/block';
import { CallbackType } from '~src/utils/event-bus';
import template from './input.hbs';

export type InputProps = {
    title: string;
    type: string;
    id: string;
    inputName: string;
    styles?: string[];
    settings?: { withInternalID?: boolean; disabled: boolean };
    events?: Record<string, CallbackType>;
};

export default class Input extends Block {
    constructor(props: InputProps) {
        super(props, 'div');

        if (!this.element) {
            return;
        }

        this.element.classList.add('input-wrap', 'window', 'p-0/5', 'sm', 'bg-gray-light');
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
