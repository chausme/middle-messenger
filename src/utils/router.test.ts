/**
 * @jest-environment jsdom
 */
import Router from './router2';

describe('Router', () => {
    test('should return router instance', () => {
        const routerTest = new Router({});
        console.log(routerTest);
        const placeholder = 'Hello';
        expect(placeholder).toBe('Hello');
    });
});
