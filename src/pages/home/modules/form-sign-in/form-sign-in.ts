import Block from '~/src/utils/block';
import { CallbackType } from '~/src/utils/event-bus';
import InputWLabel from '~/src/components/input-w-label';
import Button from '~/src/components/button';
import template from './form-sign-in.hbs';

type FormProps = {
    id: string;
    [key: `input_${string}`]: InputWLabel;
    [key: `button_${string}`]: Button;
    styles?: string[];
    settings?: { withInternalID?: boolean };
    events?: Record<string, CallbackType>;
};

export default class FormSignIn extends Block {
    constructor(props: FormProps) {
        super(props, 'form');

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
