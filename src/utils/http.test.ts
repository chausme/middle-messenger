import HTTP from './http';

describe('HTTP module', () => {
    const testApi = new HTTP();
    console.log(testApi);
    test('should return correct functions', () => {
        expect(testApi).toMatchObject({
            get: expect.any(Function),
            post: expect.any(Function),
            put: expect.any(Function),
            delete: expect.any(Function),
        });
    });
});
