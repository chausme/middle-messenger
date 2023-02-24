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

    test('should contain xhr.withCredentials inside request function', async () => {
        const testApi = new HTTP();
        expect(testApi.request.toString().indexOf('xhr.withCredentials = true')).toBeGreaterThan(0);
    });
});
