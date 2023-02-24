import HTTP from './http';

describe('HTTP module', () => {
    test('should return HTTP module with correct functions', () => {
        const testApi = new HTTP();
        expect(testApi).toMatchObject({
            get: expect.any(Function),
            post: expect.any(Function),
            put: expect.any(Function),
            delete: expect.any(Function),
        });
    });

    test('something', async () => {});
});
