import PageSignIn from './pages/sign-in';
import PageSignUp from './pages/sign-up';
import PageChats from './pages/chats';
import PageAccount from './pages/account';
import Page404 from './pages/404';
import Page500 from './pages/500';
import Router from './utils/router';
import './variables.css';
import './reset.css';
import './styles.css';

const router = new Router({
    ['sign-in']: new PageSignIn(),
    ['sign-up']: new PageSignUp(),
    chats: new PageChats(),
    account: new PageAccount(),
    ['page-404']: new Page404(),
    ['page-500']: new Page500(),
});
router.init();
export default router;
