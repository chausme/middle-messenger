import template from './button-icon.hbs';
import hamburger from '~/src/static/icons/hamburger.svg';
import attachment from '~/src/static/icons/attachment.svg';
import arrow from '~/src/static/icons/arrow.svg';
import back from '~/src/static/icons/back.svg';

type Icons = {
    [key: string]: string;
};

const icons: Icons = {
    hamburger,
    attachment,
    arrow,
    back,
};

export default (props = { icon: '' }) => template({ props, icon: icons[props.icon] });
