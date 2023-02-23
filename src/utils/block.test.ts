/**
 * @jest-environment jsdom
 */
// import Block from './block';

describe('Component', () => {
    // const testBlock = new (class BlankPage extends Block {
    //     constructor() {
    //         super({}, 'div');
    //     }

    //     render() {
    //         const fragment = document.createDocumentFragment();
    //         const p = document.createElement('p');
    //         p.textContent = 'Test output';
    //         fragment.appendChild(p);
    //         return fragment;
    //     }
    // })();

    test('should render content string', () => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = '123';
        div.appendChild(p);
        if (!div) {
            return;
        }
        console.log(div.querySelector('p')?.innerText);
    });
});
