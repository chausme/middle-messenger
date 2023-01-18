// import { signIn } from './modules/signin';
// import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block.js';
import template from './home.hbs';
import { ButtonNew } from '../../components/button-new';
import './home.css';

export class PageHome extends Block {
    render() {
        // console.log(btn.getContent());
        return template();
    }
}
// const pageHome = (type: string) => {
//     if (type && type === 'signUp') {
//         return signUp();
//     }
//     return signIn();
// };

// export { pageHome };
