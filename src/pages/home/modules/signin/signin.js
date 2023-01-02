import input from '/src/components/input';
import button from '/src/components/button';
import template from './signin.hbs';
import './signin.css';

export default (
    props = {
        inputs: {
            login: input({
                type: 'text',
                name: 'Login',
                id: 'login',
            }),
            password: input({
                type: 'password',
                name: 'Password',
                id: 'password',
            }),
        },
        button: button({
            name: 'Sign In',
            id: 'signin',
        }),
    }
) => {
    return template(props);
};
