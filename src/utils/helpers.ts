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

export const getDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const hoursRaw = date.getHours();
    const hours = hoursRaw ? hoursRaw % 12 : 12;
    const minutes = date.getMinutes();
    const ampm = hours % 12 >= 12 ? 'pm' : 'am';
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}${ampm}`;
};

export const trimMessage = (message: string): string => {
    const maxLength = 75;
    if (message.length <= maxLength) {
        return message;
    }
    return message.substring(0, 75) + '...';
};
