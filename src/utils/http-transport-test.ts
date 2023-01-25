import HTTPTransport from '~/src/utils/http-transport';

const testHTTPTransport = () => {
    const requestGet = new HTTPTransport().get('http://localhost:3000', {
        timeout: 3000,
        headers: { 'Custom-Header': 'This is a custom header buddy' },
        data: { a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] },
    });

    requestGet
        .then((res: any) => {
            console.log('get');
            console.log(res);
            console.log(JSON.parse(res.response));
        })
        .catch(err => {
            console.log(err);
        });

    const requestPost = new HTTPTransport().post('http://localhost:3000', {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Custom-Header': 'This is a custom header buddy',
        },
        data: { a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] },
    });

    requestPost.then((res: any) => {
        console.log('post');
        console.log(res);
        console.log(JSON.parse(res.response));
    });

    const requestPut = new HTTPTransport().put('http://localhost:3000', {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Custom-Header': 'This is a custom header buddy',
        },
        data: { a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] },
    });

    requestPut.then((res: any) => {
        console.log('put');
        console.log(res);
        console.log(JSON.parse(res.response));
    });

    const requestDelete = new HTTPTransport().delete('http://localhost:3000', {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Custom-Header': 'This is a custom header buddy',
        },
        data: { a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] },
    });

    requestDelete.then((res: any) => {
        console.log('delete');
        console.log(res);
        console.log(JSON.parse(res.response));
    });
};

export default testHTTPTransport;
