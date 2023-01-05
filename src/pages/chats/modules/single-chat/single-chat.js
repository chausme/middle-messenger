import header from './components/header';
import empty from './components/empty';
import footer from './components/footer';
import template from './single-chat.hbs';
import './single-chat.css';

const data = {
    title: 'Jerry',
};

export default (
    props = {
        header: header({
            avatar: 'https://via.placeholder.com/60',
            title: data.title,
        }),
        empty,
        footer,
    }
) => template({ props });
