import header from './components/header';
import empty from './components/empty';
import footer from './components/footer';
import template from './single-chat.hbs';
import './single-chat.css';

export default (
    props = {
        header,
        empty,
        footer,
    }
) => template({ props });
