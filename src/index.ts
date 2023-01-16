import { pageHome } from './pages/home';
import { pageChats } from './pages/chats';
import { pageAccount } from './pages/account';
import { page404 } from './pages/404';
import { page500 } from './pages/500';
import Router from './utils/router';
import './variables.css';
import './styles.css';

const router = new Router({
    signIn: pageHome('signIn'),
    signUp: pageHome('signUp'),
    chats: pageChats(),
    account: pageAccount(),
    page404: page404(),
    page500: page500(),
});
router.init();
