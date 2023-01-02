import template from './index.hbs';
import './styles.css';

export default (name, id) => {
    return template(name, id);
};
