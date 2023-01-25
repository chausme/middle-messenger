const getValidationMessage = (message: string) => {
    const validationMessage = document.createElement('div');
    validationMessage.classList.add('validation-message');
    validationMessage.textContent = message;
    return validationMessage;
};

const validateInput = (inputName: string, value, form: HTMLFormElement) => {
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
        pattern = /^hello/;
    }

    if (inputName === 'login') {
        pattern = /^hello/;
    }

    if (inputName === 'email') {
        pattern = /^hello/;
    }

    if (inputName === 'password' || inputName === 'password_2') {
        pattern = /^hello/;
    }

    if (inputName === 'phone') {
        pattern = /^hello/;
    }

    if (inputName === 'message') {
        pattern = /^hello/;
    }

    /** @todo add better validation messages */
    message = `Oops, something is wrong with the ${inputName.replace('_', ' ')} value`;

    if (!pattern || pattern.test(value)) {
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
    console.log('validating form...');
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
