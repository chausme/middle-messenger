// @ts-nocheck

import { TemplateDelegate } from 'handlebars';
import { EventBus } from './event-bus';
import { v4 as makeUUID } from 'uuid';

interface EventBusType {
    on: (event: string, callback: Function) => {};
    off: (event: string, callback: Function) => {};
    emit: (event: string, ...args: string[] | number[]) => {};
}

export class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    _element: HTMLElement | null = null;
    _meta: { tagName: string; props: {} } | null = null;
    _id: string | null = null;
    _eventBus: () => {};
    props: {
        events: {};
        settings: {
            withInternalID: boolean;
        };
    };
    children: Record<string, Block | Block[]> = {};

    _logging = false;

    constructor(tagName: string = 'div', propsAndChildren: object = {}) {
        // Create a new event bus
        const eventBus = new EventBus();

        const { children, props } = this._getChildren(propsAndChildren);

        // Save children
        this.children = children;

        // Save provided tagName and props
        this._meta = {
            tagName,
            props,
        };

        if (props?.settings?.withInternalID) {
            // Generate unique ID
            this._id = makeUUID();
        }

        // Create proxy
        this.props = this._makePropsProxy({ ...props, __id: this._id });

        // Set link to the new event bus
        this._eventBus = () => eventBus;

        // Register block events
        this._registerEvents(eventBus);

        // Emit "init" event
        eventBus.emit(Block.EVENTS.INIT);
    }

    // Register required events
    _registerEvents(eventBus: EventBusType) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    // Create resources, currently a single element, see _createDocumentElement()
    _createResources() {
        const { tagName } = this._meta;
        // Save created element i.e. tagName to use inside getContent() later
        this._element = this._createDocumentElement(tagName);
    }

    // EVENT: "init" function
    _init() {
        if (this._logging) {
            console.log('EVENT: INIT', this);
        }
        this.init();

        // Create resources, currently a single element, see _createDocumentElement()
        this._createResources();
        // Emit "render" event
        this._eventBus().emit(Block.EVENTS.FLOW_RENDER, 'emit render');
    }

    init() {}

    // EVENT: "componentDidMount" function
    _componentDidMount() {
        if (this._logging) {
            console.log('EVENT: CDM', this);
        }
        this.componentDidMount(this.props);

        Object.values(this.children).forEach((component: Block | any) => {
            component.dispatchComponentDidMount();
        });
    }

    // Could be redeclared by user
    componentDidMount(oldProps: {}) {}

    // Dispatch i.e. emit "componentDidMount" event
    dispatchComponentDidMount() {
        this._eventBus().emit(Block.EVENTS.FLOW_CDM, 'emit cdm');
    }

    // EVENT: "componentDidUpdate" function
    _componentDidUpdate(oldProps: {}, newProps: {}) {
        if (this._logging) {
            console.log('EVENT: CDU', this);
        }
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._eventBus().emit(Block.EVENTS.FLOW_RENDER, 'emit render');
        }
    }

    // Could be redeclared by user
    componentDidUpdate(oldProps: {}, newProps: {}) {
        return true;
    }

    // Set block props
    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    // Simple "element" getter to avoid private "_element" access
    get element() {
        return this._element;
    }

    // EVENT: "render" function
    // Heads up - renders not the entire element i.e. not the tagName
    // Could be overriden externally with render()
    _render() {
        if (this._logging) {
            console.log('EVENT: RENDER', this);
        }

        if (!this._element) {
            return;
        }

        const block = this.render();

        // Remove events
        this._removeEvents();

        // Clear element contents
        this._element.innerHTML = '';

        // Add element contents
        this._element.append(block);

        // Add events here
        this._addEvents();
    }

    // Could be redeclared by user
    render(): DocumentFragment {
        return new DocumentFragment();
    }

    _removeEvents() {
        console.log('remove events beforehand');
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName: string) => {
            if (this._element) {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }

    // Helper to get element content for output
    getContent() {
        return this.element;
    }

    // Create proxy
    _makePropsProxy(props: {}) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        // @todo avoid re-assignment
        props = new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            // Prevent props removal
            deleteProperty(target, prop) {
                throw new Error('Access error: ', target, prop);
            },

            set(target, prop, value) {
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self._eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
        });

        return props;
    }

    // Create a single element based on provided tagName
    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        const element = document.createElement(tagName);
        if (this._id) {
            element.setAttribute('data-id', this._id);
        }
        return element;
    }

    // Filter props and children
    _getChildren(propsAndChildren: {}) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    // Return compiled template
    compile(template: TemplateDelegate, context: Record<string, string>) {
        console.error('check where is input');

        const propsAndStubs = { ...context };

        Object.entries(this.children).forEach(([key, component]: [string, Block | any]) => {
            propsAndStubs[key] = `<div data-id="${component._id}" />`;
        });

        const html = template(propsAndStubs);
        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = html;

        Object.values(this.children).forEach((component: Block | any) => {
            const stub = fragment.content.querySelector(`[data-id="${component._id}"]`);
            if (!stub) {
                return;
            }
            stub.replaceWith(component.getContent());
        });

        return fragment.content;
    }

    // Show block with simple CSS
    show() {
        if (!this._element) {
            return;
        }
        this._element.style.display = 'block';
        console.log('show internal');
    }

    // Hide block with simple CSS
    hide() {
        if (!this._element) {
            return;
        }
        this._element.style.display = 'none';
        console.log('hide internal');
    }
}
