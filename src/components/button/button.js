import template from './button.hbs';
import './button.css';

export default (title, id, styles = null) => template(title, id, styles);
