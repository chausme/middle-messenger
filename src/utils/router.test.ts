/**
 * @jest-environment jsdom
 */
import Router from './router';
import BlankPage from '@pages/blank';

describe('Router', () => {
    test('should return router instance', () => {
        const routerTest = new Router({ blank: new BlankPage() });
        expect(routerTest).toBeInstanceOf(Router);
    });
});
