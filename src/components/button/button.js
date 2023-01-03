import template from './button.hbs';
import './button.css';

export default (title, id, styles = null, link = false) => template(title, id, styles);
