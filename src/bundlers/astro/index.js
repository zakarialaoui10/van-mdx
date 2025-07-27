import ViteVanMdx from "../vite/index.js"
const AstroVanMdx = () => ({
    name: "astro-van-mdx",
    hooks: {
        "astro:config:setup": async ({ updateConfig, addRenderer }) => {
            updateConfig({
              vite : {
                plugins : [
                  ViteVanMdx()
                ]
              }
            })            
            addRenderer({
                name: "astro-van-mdx",
                serverEntrypoint: "van-mdx/astro/entry-server",
                clientEntrypoint: "van-mdx/astro/entry-client",
            });
        },
    },
});
export default AstroVanMdx;


// import ViteVanMdx from "../vite/index.js";
// const AstroVanMdx = () => ({
//     name: "astro-mdzjs",
//     hooks: {
//         "astro:config:setup": async ({ updateConfig }) => {
//           updateConfig({
//             vite : {
//               plugins : [
//                 ViteVanMdx()
//               ]
//             }
//           })
//         },
//     },
// });
// export default AstroVanMdx;