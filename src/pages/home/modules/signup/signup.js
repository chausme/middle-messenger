import inputWLabel from '~/src/components/input-w-label';
import button from '~/src/components/button';
import template from './signup.hbs';
import './signup.css';

// @todo add sign up logic
// document.addEventListener('DOMContentLoaded', function () {
//     const buttonSignIn = document.querySelector('#signup');
//     buttonSignIn?.addEventListener('click', () => {
//         console.log('signing up...');
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
                styles: 'mb-2',
                id: 'signin',
                link: '/',
            }),
            signup: button({
                title: 'Sign Up',
                id: 'signup',
                styles: 'bg-orange',
                link: '',
            }),
        },
    }
) => template(props);
