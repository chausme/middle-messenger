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

    // remove validation output if exists

    if (inputWrap) {
        const validationMessageEl = inputWrap.nextSibling;
        if (validationMessageEl) {
            validationMessageEl.remove();
        }
    }

    /** @todo add better validation messages */
    if (inputName === 'login') {
        pattern = /^hello/;
        message = 'Oops, something is wrong with the login value';
    }

    if (inputName === 'password') {
        pattern = /^world/;
        message = 'Oops, something is wrong with the login value';
    }

    if (!pattern || pattern.test(value)) {
        inputWrap?.classList.remove('error');
        return true;
    }

    const validationMessage = getValidationMessage(message);

    inputWrap?.classList.add('error');
    inputWrap?.after(validationMessage);
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
