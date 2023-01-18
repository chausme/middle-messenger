import { Block } from '~/src/utils/block.js';
import template from './button-new.hbs';
export default class ButtonNew extends Block {
    constructor(props) {
        super('button', props);
    }

    render() {
        return template({ props: this.props });
    }
}
