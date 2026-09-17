import m from "mithril";

export const tags = new Proxy({}, {
    get(_, tag) {
        return (attrs, ...children) =>
            m(tag, attrs, children);
    }
});