import Block from '~/src/utils/block';
import Form from '~/src/components/form';
import ButtonIcon from '~/src/components/button-icon';
import Button from '~/src/components/button';
import InputWLabel from '~/src/components/input-w-label';
import validator from '~/src/utils/validator';
import template from './pop-up-add-chat.hbs';

export default class PopUpAddChat extends Block {
    constructor() {
        super({}, 'div');
    }

    init() {
        this.children.buttonBack = new ButtonIcon({
            title: 'Close',
            id: 'close',
            icon: 'close',
            css: ['bg-orange'],
            action: 'close',
            events: {
                click(e) {
                    e.preventDefault();
                    // close pop-up
                    const popUpWrap = document.querySelector('.pop-up');
                    if (popUpWrap) {
                        popUpWrap.remove();
                    }
                },
            },
        });
        this.children.form = new Form({
            id: 'form-add-chat',
            events: {
                submit(e) {
                    e.preventDefault();
                    const isValid = validator(e);
                    if (isValid) {
                        const formData = new FormData(e.target);
                        const formProps = Object.fromEntries(formData);
                        console.log('submitting form');
                        console.log(formProps);
                    }
                },
                blur(e) {
                    validator(e);
                },
                focus(e) {
                    validator(e);
                },
            },
            inputs: [
                new InputWLabel({
                    title: 'Chat name',
                    id: 'chat_name',
                    type: 'text',
                }),
            ],
            buttons: [
                new Button({
                    title: 'Add chat',
                    id: 'add_chat',
                    action: 'add-chat',
                    css: ['bg-green', 'mb-2'],
                    events: {
                        click(e) {
                            e.preventDefault();
                            console.log('add chat');
                        },
                    },
                }),
            ],
        });
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {
            ...this.props,
        });
    }
}
