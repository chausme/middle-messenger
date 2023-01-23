import PageHome from './pages/home';
// import pageChats from './pages/chats';
// import pageAccount from './pages/account';
// import page404 from './pages/404';
// import page500 from './pages/500';
import Router from './utils/router';
import './variables.css';
import './reset.css';
import './styles.css';

const router = new Router({
    signIn: new PageHome({ type: 'signIn' }),
    signUp: new PageHome({ type: 'signUp' }),
    // chats: pageChats(),
    // account: pageAccount(),
    // page404: page404(),
    // page500: page500(),
});
router.init();
