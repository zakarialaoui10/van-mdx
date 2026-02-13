import {renderDomToString } from "ziko-server/server-only-utils"
function check(Component, attributes) {
    if (typeof Component !== "function") return false;
	return true
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
    console.log(`renderToStaticMarkup : ${Component}`)
    const UI = Component(props)
    const html = renderDomToString(UI)
    return { 
        html,
     };
}

export default {
    name : "astro-van-mdx",
    check,
    renderToStaticMarkup
}