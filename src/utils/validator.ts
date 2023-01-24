const validator = (e: Event) => {
    console.log('validating form...');
    if (!e.currentTarget) {
        return;
    }
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    return false;
};

export default validator;
