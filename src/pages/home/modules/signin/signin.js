import inputWLabel from '~/src/components/input-w-label';
import button from '~/src/components/button';
import template from './signin.hbs';

// @todo add sign in logic

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
                id: 'signin',
                styles: 'mb-2 bg-green',
                link: '',
            }),
            signup: button({
                title: 'Sign Up',
                id: 'test',
                styles: 'bg-orange',
                link: '#signup',
            }),
        },
    }
) => template({ props });
