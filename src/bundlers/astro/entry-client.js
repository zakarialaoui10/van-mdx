function renderToString(){
    
}
function check(Component, attributes) {
    if (typeof Component !== "function") return false;
	return true
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
    const UI = Component(props)
    const html = renderToString(UI)
    return { 
        html,
     };
}

export default {
    name : "astro-van-mdx",
    check,
    renderToStaticMarkup
}