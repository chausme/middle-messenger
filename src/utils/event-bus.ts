type Listeners = Record<string, Function[]>;

export class EventBus {
    listeners: Listeners;

    constructor() {
        this.listeners = {};
        // @ts-ignore
        if (EventBus.__instance) {
            // @ts-ignore
            return EventBus.__instance;
        }

        // @ts-ignore
        EventBus.__instance = this;
    }

    on(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`There is no event: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    }

    emit(event: string, ...args: string[] | number[]) {
        if (!this.listeners[event]) {
            throw new Event(`There is no event: ${event}`);
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }
}
