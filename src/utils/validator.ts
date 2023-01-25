const getValidationMessage = (message: string) => {
    const validationMessage = document.createElement('div');
    validationMessage.classList.add('validation-message');
    validationMessage.textContent = message;
    return validationMessage;
};

const validateInput = (inputName: string, value: FormDataEntryValue, form: HTMLFormElement) => {
    const input = form.querySelector(`input[name="${inputName}"]`);

    if (!input) {
        return true;
    }

    const inputWrap = input.parentElement;
    let pattern;
    let message = 'Oops, something is wrong';

    // remove validation output if exists and if it's not message field

    if (inputWrap && inputName !== 'message') {
        const validationMessageEl = inputWrap.nextSibling;
        if (validationMessageEl) {
            validationMessageEl.remove();
        }
    }

    if (inputName === 'first_name' || inputName === 'second_name' || inputName === 'display_name') {
        pattern = /^([A-Z]){1}([A-Za-z-])+$/;
    }

    /** @todo */
    if (inputName === 'login') {
        pattern = /^hello/;
    }

    /** @todo make domain name letters mandatory */
    if (inputName === 'email') {
        pattern = /^([A-Za-z-_0-9])+@([A-Za-z-_0-9])+\.[A-Za-z-_0-9]+$/;
    }

    /** @todo */
    if (inputName === 'password' || inputName === 'password_2') {
        pattern = /^hello/;
    }

    if (inputName === 'phone') {
        pattern = /^(\+)?(\d){10,15}$/;
    }

    if (inputName === 'message') {
        pattern = /^.+$/;
    }

    /** @todo add better validation messages */
    message = `Oops, something is wrong with the ${inputName.replace('_', ' ')} value`;

    if (typeof value === 'string' && (!pattern || pattern.test(value))) {
        inputWrap?.classList.remove('error');
        return true;
    }

    const validationMessage = getValidationMessage(message);

    inputWrap?.classList.add('error');

    // Don't add validation output for message field
    if (inputName !== 'message') {
        inputWrap?.after(validationMessage);
    }

    return false;
};

const validator = (e: Event) => {
    // Don't validate form on type="button" click

    if (e.target && e.target.tagName === 'BUTTON' && e.target.getAttribute('type') === 'button') {
        return false;
    }

    if (!e.currentTarget) {
        return false;
    }
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    const submitButton = form.querySelector('button[type="submit"]');
    let hasErrors = false;
    Object.entries(formProps).forEach(([inputName, value]) => {
        if (!validateInput(inputName, value, form) && hasErrors === false) {
            hasErrors = true;
        }
    });

    if (hasErrors) {
        submitButton?.setAttribute('disabled', 'disabled');
        return false;
    }

    submitButton?.removeAttribute('disabled');
    return true;
};

export default validator;
