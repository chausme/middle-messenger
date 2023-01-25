enum METHOD {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

type RequestOptionsProps = {
    method: METHOD;
    data: Record<string, any>;
    headers: Record<string, string>;
};

function queryStringify(data: {}) {
    if (!data) {
        return false;
    }

    return Object.keys(data)
        .reduce((acc, key) => {
            return acc.concat(`${key}=${data[key]}`);
        }, [])
        .join('&');
}

export default class HTTPTransport {
    get = (url: string, options = {}) => {
        return this.request(
            options.data ? `${url}?${queryStringify(options.data)}` : url,
            { ...options, data: {}, method: METHOD.GET },
            options.timeout
        );
    };

    put = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
    };

    post = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
    };

    delete = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
    };

    request = (url: string, options: RequestOptionsProps, timeout = 5000) => {
        const { method, data, headers } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('Oops, there is no method provided');
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            if (headers && Object.keys(headers).length) {
                Object.keys(headers).forEach(header => {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.timeout = timeout;

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
