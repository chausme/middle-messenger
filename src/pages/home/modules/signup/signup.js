import inputWLabel from '~/src/components/input-w-label';
import button from '~/src/components/button';
import template from './signup.hbs';

// @todo add sign up logic

export default (
    props = {
        inputs: {
            login: inputWLabel({
                title: 'Login',
                id: 'login',
                type: 'text',
            }),
            password: inputWLabel({
                title: 'Password',
                id: 'password',
                type: 'password',
            }),
        },
        buttons: {
            signin: button({
                title: 'Sign In',
                styles: 'mb-2 bg-green',
                id: 'signin',
                link: '/',
            }),
            signup: button({
                title: 'Sign Up',
                id: 'signup',
                styles: 'bg-pink',
                link: '',
            }),
        },
    }
) => template({ props });
