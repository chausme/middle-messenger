// @ts-ignore
import template from './button-icon.hbs';
// @ts-ignore
import hamburger from '~/static/icons/hamburger.svg';
// @ts-ignore
import attachment from '~/static/icons/attachment.svg';
// @ts-ignore
import arrow from '~/static/icons/arrow.svg';
// @ts-ignore
import back from '~/static/icons/back.svg';

const icons = {
    hamburger,
    attachment,
    arrow,
    back,
};

export default (props = {}) => template({ props, icon: icons[props.icon] });
