import inputWLabel from '~/src/components/input-w-label';
import button from '~/src/components/button';
import template from './signin.hbs';
import './signin.css';

// @todo add sign in logic
// document.addEventListener('DOMContentLoaded', function () {
//     const buttonSignIn = document.querySelector('#signin');
//     buttonSignIn?.addEventListener('click', () => {
//         console.log('signing in...');
//     });
// });

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
                styles: 'mb-2',
                link: '',
            }),
            signup: button({
                title: 'Sign Up',
                id: 'signup',
                styles: 'bg-orange',
                link: '#signup',
            }),
        },
    }
) => template(props);
