import signIn from './modules/signin';
import signUp from './modules/signup';
import getHash from '~/src/utils/getHash';

export default () => {
    const hash = getHash();
    if (hash && hash === 'signup') {
        return signUp();
    } else {
        return signIn();
    }
};
