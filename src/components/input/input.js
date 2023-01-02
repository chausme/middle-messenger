import template from './input.hbs';
import './input.css';

export default ({ type, name, id }) => {
    return template({ type, name, id });
};
