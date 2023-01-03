import signIn from './modules/signin';
import signUp from './modules/signup';

export default type => {
    if (type && type === 'signUp') {
        return signUp();
    } else {
        return signIn();
    }
};
