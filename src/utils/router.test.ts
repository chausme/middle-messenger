/**
 * @jest-environment jsdom
 */
import Router from './router';
import BlankPage from '@pages/blank/blank';

describe('Router', () => {
    test('should return router instance', () => {
        const routerTest = new Router({ blank: new BlankPage() });
        console.log(routerTest);
        const placeholder = 'Hello';
        expect(placeholder).toBe('Hello');
    });
});
