import template from './buttonIcon.hbs';
import hamburger from '~/static/icons/hamburger.svg';
import attachment from '~/static/icons/attachment.svg';
import arrow from '~/static/icons/arrow.svg';

const icons = {
    hamburger,
    attachment,
    arrow,
};

export default (props = {}) => template({ props, icon: icons[props.icon] });
