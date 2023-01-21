import template from './avatar.hbs';

const windowSizes = {
    sm: 'sm',
    md: 'sm',
    lg: 'md',
};

export default (props = { size: '' }) => template({ props, windowSizes });
