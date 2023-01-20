// @ts-nocheck

import { Block } from '~/src/utils/block';
import { Form } from '~/src/components/form';
import { Button } from '~/src/components/button';
import template from './home.hbs';
import './home.css';

interface PageHomeProps {
    title: string;
}

export class PageHome extends Block {
    constructor(props: PageHomeProps) {
        super('div', props);

        this.element.classList.add('window', 'lg', 'p-2/5', 'auth', 'w-fixed');

        if (this.props.type === 'signIn') {
            this.props.title = 'Sign In';
            this._element.classList.add('signin', 'bg-orange');
        } else if (this.props.type === 'signUp') {
            this.props.title = 'Sign Up';
            this._element.classList.add('signup', 'bg-pink');
        }
    }

    init() {
        this.children.button = new Button({
            title: 'New button',
            link: '123',
            id: 'update_details',
            styles: ['bg-green'],
            events: {
                click(event) {
                    console.log(event);
                },
            },
            settings: { withInternalID: true },
        });

        if (this.props.type === 'signIn') {
            this.children.form = new Form({
                id: 'sign-in',
            });
        } else if (this.props.type === 'signUp') {
        }

        setTimeout(() => {
            // Update button title
            this.children.button.setProps({ title: 'Updated text on button' });
        }, 3000);
    }

    componentDidUpdate(oldProps: { title: string }, newProps: { title: string }) {
        if (oldProps.title !== newProps.title) {
            this.children.button.setProps({ title: newProps.title });
        }

        return true;
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            title: this.props.title,
        });
    }
}
