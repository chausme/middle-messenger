import Block from '~/src/utils/block';
import { FormProps } from '~/src/utils/prop-types';
import { validateForm } from '~/src/utils/validator';
import { AuthController } from '~/src/controllers/auth-controller';
import { ApiAuthSignIn } from '~/src/utils/prop-types';

import template from './form.hbs';

export default class Form extends Block {
    constructor(props: FormProps) {
        props.events = {
            async submit(e) {
                try {
                    e.preventDefault();
                    if (!validateForm(e.target)) {
                        return;
                    }
                    const auth = new AuthController();
                    const formData = new FormData(e.target);
                    const formProps = Object.fromEntries(formData);
                    console.log('submitting form');
                    if (props.id === 'form-sign-in') {
                        await auth.signin(formProps as ApiAuthSignIn);
                    } else if (props.id === 'form-sign-up') {
                        console.log('form: sign up');
                    }
                } catch (e: any) {
                    alert(`Oops, something went wrong: ${e.message}`);
                    console.error(e.message);
                }
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
