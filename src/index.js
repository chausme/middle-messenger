import pageHome from './pages/home';
import pageChats from './pages/chats';
import pageAccount from './pages/account';
import page404 from './pages/404';
import Router from './utils/router';
import Handlebars from 'handlebars';
import './variables.css';
import './styles.css';

const router = new Router({
    signIn: pageHome(),
    signUp: pageHome('signUp'),
    chats: pageChats(),
    account: pageAccount(),
    404: page404,
});
router.init();
