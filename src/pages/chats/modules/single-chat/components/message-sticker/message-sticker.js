import template from './message-sticker.hbs';
import * as classes from './message-sticker.module.css';
import smile from '~/src/static/stickers/smile.png';

type Stickers = {
    [key: string]: string | boolean;
};

const stickers: Stickers = {
    smile,
};

export default (props = { sticker: '', datetime: '', own: false }) =>
    template({ props, classes, sticker: stickers[props.sticker] });
