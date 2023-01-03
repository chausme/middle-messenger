import pageHome from './pages/home';
import pageChats from './pages/chats';
import page404 from './pages/404';
import Router from './utils/router';
import './reset.css';
import './variables.css';
import './styles.css';

const router = new Router({
    signIn: pageHome(),
    signUp: pageHome('signUp'),
    chats: pageChats(),
    404: page404,
});
router.init();
