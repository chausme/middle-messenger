import { EventBus } from './event-bus';

export class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    _element = null;
    _meta = null;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = 'div', props = {}) {
        // Create a new event bus
        const eventBus = new EventBus();

        // Save provided tagName and props
        this._meta = {
            tagName,
            props,
        };

        // Create proxy
        this.props = this._makePropsProxy(props);

        // Set link to the new event bus
        this._eventBus = () => eventBus;

        // Register block events
        this._registerEvents(eventBus);

        // Emit "init" event
        eventBus.emit(Block.EVENTS.INIT);
    }

    // Register required events
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
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
    init() {
        console.log('init here');
        // Create resources, currently a single element, see _createDocumentElement()
        this._createResources();
        // Emit "render" event
        this._eventBus().emit(Block.EVENTS.FLOW_RENDER, 'emit render');
    }

    // EVENT: "componentDidMount" function
    _componentDidMount() {
        console.log('cdm here');
        this.componentDidMount();
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount(oldProps) {}

    // Dispatch i.e. emit "componentDidMount" event
    dispatchComponentDidMount() {
        this._eventBus().emit(Block.EVENTS.FLOW_CDM, 'emit cdm');
    }

    // EVENT: "componentDidUpdate" function
    _componentDidUpdate(oldProps, newProps) {
        console.log('cdu here');
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._eventBus().emit(Block.EVENTS.FLOW_RENDER, 'emit render');
        }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
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
        const block = this.render();
        console.log(block);
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду

        this._element.innerHTML = block;

        // Remove events here

        // Add events here

        this._addEvents();
    }

    // Может переопределять пользователь, необязательно трогать
    render() {}

    _removeEvents() {
        console.log('remove events beforehand');
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    // Helper to get element content for output
    getContent() {
        return this.element;
    }

    // Create proxy
    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        // @todo avoid re-assignment
        props = new Proxy(props, {
            get(target, prop) {
                if (self._isPrivate(prop)) {
                    throw new Error('Access error');
                }

                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            // Prevent props removal
            deleteProperty(target, prop) {
                console.log('using proxy @deleteProperty');
                throw new Error('Access error');
            },

            set(target, prop, value) {
                console.log('using proxy @set');
                if (self._isPrivate(prop)) {
                    throw new Error('Access error');
                }
                // Don't update anything if prop value is the same
                if (target[prop] === value) {
                    // Return "true" with non-updated property
                    return true;
                }
                target[prop] = value;
                self._eventBus().emit(Block.EVENTS.FLOW_CDU, 'emit cdu');
                return true;
            },
        });

        return props;
    }

    // Create a single element based on provided tagName
    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        console.log(tagName);
        return document.createElement(tagName);
    }

    // Show block with simple CSS
    show() {
        console.log('show internal');
        this._element.style.display = 'block';
    }

    // Hide block with simple CSS
    hide() {
        this._element.style.display = 'none';
        console.log('hide internal');
    }

    _isPrivate = prop => prop.startsWith('_');
}
