import { PageHome } from './pages/home';
import { Button } from '~/src/components/button';
// import { pageChats } from './pages/chats';
// import { pageAccount } from './pages/account';
// import { page404 } from './pages/404';
// import { page500 } from './pages/500';
import { Router } from './utils/router';
import './variables.css';
import './styles.css';

const button = new Button({
    title: 'New button',
    link: '123',
    id: 'update_details',
    styles: ['bg-green'],
    events: {
        click: event => {
            console.log(event);
        },
    },
    settings: { withInternalID: true },
});

const router = new Router({
    signIn: new PageHome({ button }),
    // signUp: new PageHome({ type: 'signUp' }),
    // chats: pageChats(),
    // account: pageAccount(),
    // page404: page404(),
    // page500: page500(),
});
router.init();
