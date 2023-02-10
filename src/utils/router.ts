import Block from '~/src/utils/block';
import store, { StoreEvents } from '~/src/utils/store';

export default class Router {
    routesData;
    #baseUrl = new URL(window.location.href).origin;
    #history;

    constructor(routesData: Record<string, Block>) {
        this.routesData = routesData;
        this.#history = window.history;
    }

    init() {
        const path = this.getPath(window.location.href);
        this.load(path);
        // load template on history change
        window.onpopstate = (event: PopStateEvent) => {
            const target = event.currentTarget as Window;
            const path = target.location?.pathname.substring(1);
            this.load(path, true);
        };
        this.addLinksClickListener();
    }

    // Output respective template on page and optionally update history
    load(path: string, skipHistoryUpdate?: boolean) {
        const template = this.getTemplate(path);
        const root = document.getElementById('root');
        if (root) {
            root.innerHTML = '';
            root.append(template.component?.getContent());
        }
        this.updateBgColor(template.name);
        if (!skipHistoryUpdate) {
            window.history.pushState({ path }, '', `${this.#baseUrl}/${path}`);
        }
    }

    back() {
        this.#history.back();
    }

    forward() {
        this.#history.forward();
    }

    // Apply auth state to provided path
    #withAuth(path: string) {
        const pagesPublic = ['sign-in', 'sign-up'];
        const pagesPrivate = ['settings', 'messenger', 'logout'];
        if (store.getState()?.logged && pagesPublic.includes(path)) {
            return 'logout';
        }
        if (!store.getState()?.logged && pagesPrivate.includes(path)) {
            return 'sign-in';
        }
        return path;
    }

    // Get template data
    getTemplate(path: string) {
        const pathData = this.getPathData(path);
        const template = this.#withAuth(pathData.path ? pathData.path : 'sign-in');
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

        // add header test router back/forward links
        const routerLinkBack = document.querySelector('.router-link.back');
        routerLinkBack?.addEventListener('click', e => {
            e.preventDefault();
            this.back();
        });

        const routerLinkForward = document.querySelector('.router-link.forward');
        routerLinkForward?.addEventListener('click', e => {
            e.preventDefault();
            this.forward();
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
        if (templateName === 'logout') {
            color = 'pink';
        }
        body.dataset.bgColor = color;
    }
}
