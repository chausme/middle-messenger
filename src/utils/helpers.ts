type Indexed<T = unknown> = {
    [key in string]: T;
};

const isObject = (value: Indexed) =>
    typeof value === 'object' && !Array.isArray(value) && value !== null;

const isString = (value: unknown) => typeof value === 'string' || value instanceof String;

const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    // eslint-disable-next-line no-restricted-syntax
    for (const j in rhs) {
        // eslint-disable-next-line no-prototype-builtins
        if (!rhs.hasOwnProperty(j)) {
            // eslint-disable-next-line no-continue
            continue;
        }

        try {
            if (isObject(rhs[j] as Indexed)) {
                rhs[j] = merge(lhs[j] as Indexed, rhs[j] as Indexed);
            } else {
                lhs[j] = rhs[j];
            }
        } catch (e) {
            lhs[j] = rhs[j];
        }
    }
    return lhs;
};

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
    if (!isObject) {
        return object;
    }
    if (!isString(path)) {
        throw new Error('path must be string');
    }

    const keys = path.split('.');
    const rhs = keys.reduceRight(
        (prev, key) => ({
            [key]: prev,
        }),
        value
    );

    return merge(object as Indexed, rhs as Indexed);
};
