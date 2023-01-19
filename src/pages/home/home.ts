import { signIn } from './modules/signin';
import { signUp } from './modules/signup';
import { Block } from '~/src/utils/block';
import template from './home.hbs';
import { Button } from '~/src/components/button';
import './home.css';

interface PageHomeProps {
    button: Button;
}

export class PageHome extends Block {
    constructor(props: PageHomeProps) {
        super('div', props);
    }

    render() {
        this.dispatchComponentDidMount();
        return this.compile(template, {
            form: this.props.type === 'signUp' ? signUp : signIn,
            button: this.props.button,
        });
    }
}
