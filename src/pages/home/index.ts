import { signIn } from './modules/signin';
import { signUp } from './modules/signup';
import './home.css';

const pageHome = (type: string) => {
    if (type && type === 'signUp') {
        return signUp();
    }
    return signIn();
};

export { pageHome };
