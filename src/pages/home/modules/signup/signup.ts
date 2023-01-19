import { inputWLabel } from '~/src/components/input-w-label';
import { Button } from '~/src/components/button';
import template from './signup.hbs';

// @todo add sign up logic

export default (
    props = {
        inputs: {
            email: inputWLabel({
                title: 'Email',
                id: 'email',
                type: 'email',
            }),
            login: inputWLabel({
                title: 'Login',
                id: 'login',
                type: 'text',
            }),
            firstName: inputWLabel({
                title: 'First Name',
                id: 'first_name',
                type: 'text',
            }),
            lastName: inputWLabel({
                title: 'Last Name',
                id: 'second_name',
                type: 'text',
            }),
            phone: inputWLabel({
                title: 'Phone',
                id: 'phone',
                type: 'tel',
            }),
            password: inputWLabel({
                title: 'Password',
                id: 'password',
                type: 'password',
            }),
            password2: inputWLabel({
                title: 'Confirm password',
                id: 'password_2',
                type: 'password_2',
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
