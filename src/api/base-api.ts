export default abstract class BaseAPI {
    static baseUrl = process.env.API_BASE_URL;

    create() {
        throw new Error('Not implemented');
    }

    request() {
        throw new Error('Not implemented');
    }

    update() {
        throw new Error('Not implemented');
    }

    delete() {
        throw new Error('Not implemented');
    }
}
