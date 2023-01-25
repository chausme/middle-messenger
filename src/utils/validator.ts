const validateInput = (inputName: string, value, form: HTMLFormElement) => {
    const input = form.querySelector(`input[name="${inputName}"]`);

    if (!input) {
        return true;
    }

    const inputWrap = input.parentElement;
    let pattern;

    if (inputName === 'login') {
        pattern = /^hello/;
    }

    // <div class="validation-message">Oops, something went wrong</div>

    if (!pattern || pattern.test(value)) {
        inputWrap?.classList.remove('error');
        return true;
    }

    inputWrap?.classList.add('error');
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
