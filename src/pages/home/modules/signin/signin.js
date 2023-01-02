import inputWLabel from '/src/components/input-w-label';
import button from '/src/components/button';
import template from './signin.hbs';
import './signin.css';

export default (
    props = {
        inputs: {
            login: inputWLabel({
                type: 'text',
                name: 'Login',
                id: 'login',
            }),
            password: inputWLabel({
                type: 'password',
                name: 'Password',
                id: 'password',
            }),
        },
        buttons: {
            signin: button({
                name: 'Sign In',
                id: 'signin',
                styles: 'mb-2',
            }),
            signup: button({
                name: 'Sign Up',
                id: 'signup',
                styles: 'bg-orange',
            }),
        },
    }
) => {
    return template(props);
};
