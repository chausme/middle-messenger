const proxifyProps = (props: any) => {
    // @review $this, use another method?
    const self = this;

    return new Proxy(props, {
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
};

export { proxifyProps };
