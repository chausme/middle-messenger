// @ts-ignore
import template from './message-sticker.hbs';
// @ts-ignore
import * as classes from './message-sticker.module.css';
// @ts-ignore
import smile from '~/static/stickers/smile.png';

const stickers = {
    smile,
};

export default (props = {}) => template({ props, classes, sticker: stickers[props.sticker] });
