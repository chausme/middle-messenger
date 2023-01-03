export default class Router {
    constructor(routesData) {
        this.routesData = routesData;
    }

    #baseUrl = new URL(window.location.href).origin;

    init() {
        const path = this.getPath(window.location);
        this.load(path);

        // @todo rafactor as needed
        const buttonLinks = document.querySelectorAll('.link');
        buttonLinks.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                const linkPath = e.target.dataset?.path ?? '';
                this.load(linkPath, true);
            });
        });

        // @todo add support for browser history changes
        // window.onpopstate = history.onpushstate = function (e) {
        //     console.log(e);
        // };
    }

    // Output respective template on page and optionally update path
    load(path, updatePath = false) {
        const template = this.getTemplate(path);
        const root = document.getElementById('root');
        root.innerHTML = template.data;
        this.updateBgColor(template);
        if (updatePath) {
            window.history.pushState({}, '', `${this.#baseUrl}/${path}`);
        }
    }

    // Get template data
    getTemplate(path = null) {
        const pathData = this.getPathData(path);
        let template = pathData.path;
        if (!template && !pathData.hash) {
            template = 'signIn';
        } else if (!template && pathData.hash && pathData.hash === 'signup') {
            template = 'signUp';
        }
        return !this.routesData[template]
            ? { name: 404, data: this.routesData['404'] }
            : { name: template, data: this.routesData[template] };
    }

    // Little helper to get path from provided location.href
    getPath(href) {
        const url = new URL(href);
        return url.pathname.replace('/', '');
    }

    // Little helper to get naked path and hash from provided full path
    getPathData(path) {
        const url = new URL(`${this.#baseUrl}/${path}`);
        return {
            path: url.pathname.replace('/', ''),
            hash: url.hash.replace('#', ''),
        };
    }

    // Little helper to update body background
    updateBgColor(template) {
        if (template.name === 'home') {
            // @todo
        }
    }
}
