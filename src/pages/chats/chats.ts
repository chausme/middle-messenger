import Block from '~/src/utils/block';
// import ChatList from './modules/chat-list';
// import SingleChat from './modules/single-chat';
import Button from '~/src/components/button';
import template from './chats.hbs';
import * as classes from './chats.module.css';

export default class PageChats extends Block {
    constructor() {
        super({}, 'div');

        this.element.classList.add('d-flex', classes.chats);
    }

    init() {
        this.children.button = new Button({
            title: 'Sign In',
            id: 'sign_in',
            styles: ['bg-green'],
            settings: { withInternalID: true },
        });
    }

    render() {
        this.dispatchComponentDidMount();

        return this.compile(template, {});
    }
}
