import Router from './router';

describe('Router', () => {
    it('use() should return Router instance', () => {
        const routerTest = new Router({});
        console.log(routerTest);
    });
});
