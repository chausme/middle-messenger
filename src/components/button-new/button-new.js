import { Block } from '~/src/utils/block.js';
export default class ButtonNew extends Block {
    constructor(props) {
        super('button', props);
    }

    render() {
        return `<div>${this.props.text}</div>`;
    }
}
