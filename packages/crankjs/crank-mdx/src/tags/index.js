import { createElement } from "@b9g/crank";

export const tags = new Proxy(
    {},
    {
        get(target, tag) {
            if (!(tag in target)) {
                target[tag] = (...args) => {
                    return createElement(tag, ...args);
                };
            }

            return target[tag];
        }
    }
);