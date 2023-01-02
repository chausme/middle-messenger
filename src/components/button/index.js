import template from './index.hbs';
import './styles.css';

export default (name, id, styles = null) => {
    return template(name, id, styles);
};
