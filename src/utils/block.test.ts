/* eslint-disable max-classes-per-file */
import Block from './block';

describe('Component', () => {
    test('should render fragment with correct contents', () => {
        class BlankPage extends Block {
            constructor() {
                super({}, 'div');
            }

            render() {
                const fragment = document.createDocumentFragment();
                const p = document.createElement('p');
                p.innerText = 'Test output';
                fragment.appendChild(p);
                return fragment;
            }
        }
        const fragment = new BlankPage().render();
        const div = document.createElement('div');
        div.appendChild(fragment);
        expect(div.querySelector('p')?.innerText).toBe('Test output');
    });

    test('should return HTML Button element', () => {
        class BlankButton extends Block {
            constructor() {
                super({}, 'button');
            }

            render() {
                const fragment = document.createDocumentFragment();
                const p = document.createElement('p');
                p.innerText = 'Test output';
                fragment.appendChild(p);
                return fragment;
            }
        }
        const button = new BlankButton();
        expect(button.getContent()).toBeInstanceOf(HTMLButtonElement);
    });
});
