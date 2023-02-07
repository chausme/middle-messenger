import Block from '~/src/utils/block';

export default class Router {
    routesData;

    constructor(routesData: Record<string, Block>) {
        this.routesData = routesData;
    }

    #baseUrl = new URL(window.location.href).origin;

    init() {
        const path = this.getPath(window.location.href);
        this.load(path);
        this.addLinksClickListener();
    }

    // Output respective template on page and optionally update path
    load(path: string) {
        const template = this.getTemplate(path);
        const root = document.getElementById('root');
        if (root) {
            root.innerHTML = '';
            root.append(template.component?.getContent());
        }
        this.updateBgColor(template.name);
        window.history.pushState({}, '', `${this.#baseUrl}/${path}`);
    }

    back() {}

    forward() {}

    // Get template data
    getTemplate(path: string) {
        const pathData = this.getPathData(path);
        const template = pathData.path ? pathData.path : 'sign-in';
        return !this.routesData[template]
            ? { name: 'page-404', component: this.routesData['page-404'] }
            : { name: template, component: this.routesData[template] };
    }

    // Add temporary nav link click event listeners for Sprint #1-2
    addLinksClickListener() {
        // @todo rafactor as needed
        // @todo add support for browser history changes with window.onpopstate - will do in Sprint #3
        const buttonLinks = document.querySelectorAll('.nav-link');
        buttonLinks.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();

                if (!(e.currentTarget instanceof HTMLElement)) {
                    return;
                }

                const isHome =
                    !e.currentTarget.dataset.path || e.currentTarget.dataset.path === '/';

                const linkPath =
                    isHome || !e.currentTarget.dataset.path ? '' : e.currentTarget.dataset.path;

                this.load(linkPath);
            });
        });
    }

    // Little helper to get path from provided location.href
    getPath(href: string) {
        const url = new URL(href);
        return `${url.pathname ? url.pathname.replace('/', '') : ''}`;
    }

    // Little helper to get naked path from provided full path
    getPathData(path: string) {
        const url = new URL(`${this.#baseUrl}/${path}`);
        return {
            path: url.pathname.replace('/', ''),
        };
    }

    // Little helper to update body background
    updateBgColor(templateName: string) {
        const { body } = document;
        let color = 'purple';
        if (templateName === 'signUp') {
            color = 'cyan';
        }
        if (templateName === 'chats') {
            color = 'orange';
        }
        if (templateName === 'page-404') {
            color = 'pink';
        }
        if (templateName === 'page-500') {
            color = 'red';
        }
        body.dataset.bgColor = color;
    }
}
