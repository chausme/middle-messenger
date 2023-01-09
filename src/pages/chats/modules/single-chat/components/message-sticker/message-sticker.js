import template from './message-sticker.hbs';
import * as classes from './message-sticker.module.css';
import smile from '~/static/stickers/smile.png';

const stickers = {
    smile,
};

export default (props = {}) => template({ props, classes, sticker: stickers[props.sticker] });
