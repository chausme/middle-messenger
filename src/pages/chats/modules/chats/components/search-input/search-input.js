import template from './search-input.hbs';
import * as classes from './search-input.module.css';

export default (
    props = {
        classes: classes,
    }
) => template(props);
