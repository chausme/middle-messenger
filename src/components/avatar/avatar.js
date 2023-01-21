import template from './avatar.hbs';

// type WindowSizes = {
//     [key: string]: string;
// };

// const windowSizes: WindowSizes = {
//     sm: 'sm',
//     md: 'sm',
//     lg: 'md',
// };

export default (props = { size: '' }) => template({ props, windowSize });
