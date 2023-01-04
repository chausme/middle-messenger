import template from './buttonIcon.hbs';
import hamburger from '~/static/icons/hamburger.svg';

const icons = {
    hamburger,
};

export default (props = {}) => template({ props, icon: icons[props.icon] });
