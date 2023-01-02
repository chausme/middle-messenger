import template from './input-w-label.hbs';
import '/src/components/input'; // use general input styles
import './input-w-label.css';

export default (
    props = {
        type: type,
        name: name,
        id: id,
    }
) => {
    return template(props);
};
