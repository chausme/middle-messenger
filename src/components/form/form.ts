import Block from '~/src/utils/block';
import { FormProps } from '~/src/utils/prop-types';
import { validateForm } from '~/src/utils/validator';
import template from './form.hbs';

export default class Form extends Block {
    constructor(props: FormProps) {
        props.events = {
            submit(e) {
                e.preventDefault();
                if (!validateForm(e.target)) {
                    return;
                }
                const formData = new FormData(e.target);
                const formProps = Object.fromEntries(formData);
                console.log('submitting form');
                console.log(formProps);
            },
        };

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
