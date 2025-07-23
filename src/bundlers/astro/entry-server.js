export default function (wrapper) {
    return (Component, props, { default: children, ...slotted }, {client}) => {
        // if (!wrapper.hasAttribute("ssr")){
        //     console.log("ssr")
        //     return
        // }
        wrapper.setAttribute("data-engine","van-mdx")
        const properties = props ?? {};
        switch(client){
            case "only" : wrapper.append(Component(properties)); break;
            default : {
                wrapper.innerHTML = ""
                console.log(`Client Hydration : ${Component}`)
                wrapper.append(Component(properties)); break;
            }
        }
    };
}