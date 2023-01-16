// @ts-ignore
import template from './message-sticker.hbs';
// @ts-ignore
import * as classes from './message-sticker.module.css';
// @ts-ignore
import smile from '~/static/stickers/smile.png';

type Stickers = {
    [key: string]: string | boolean;
};

const stickers: Stickers = {
    smile,
};

export default (props = { sticker: '', datetime: '', own: false }) =>
    template({ props, classes, sticker: stickers[props.sticker] });
