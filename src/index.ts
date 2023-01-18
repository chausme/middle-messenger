import { PageHome } from './pages/home';
import { ButtonNew } from './components/button-new';
// import { pageChats } from './pages/chats';
// import { pageAccount } from './pages/account';
// import { page404 } from './pages/404';
// import { page500 } from './pages/500';
// import { Router } from './utils/router';
import './variables.css';
import './styles.css';

// const router = new Router({
//     signIn: new PageHome(),
//     // signUp: pageHome('signUp'),
//     chats: pageChats(),
//     account: pageAccount(),
//     page404: page404(),
//     page500: page500(),
// });
// router.init();
window.addEventListener('DOMContentLoaded', () => {
    // const buttonNew = new ButtonNew({
    //     title: 'New button',
    //     link: '123',
    //     id: 'update_details',
    //     styles: ['bg-green'],
    //     events: {
    //         click: event => {
    //             console.log(event);
    //         },
    //     },
    // });
    // const root = document.querySelector('#root');
    const pageHome = new PageHome();
    root?.append(pageHome.getContent());
});
