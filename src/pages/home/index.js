import signIn from './modules/signin';
import signUp from './modules/signup';
import './home.css';

export default type => {
    if (type && type === 'signUp') {
        return signUp();
    }
    return signIn();
};
