const AstroVanMdx = () => ({
    name: "astro-van-mdx",
    hooks: {
        "astro:config:setup": async ({ addRenderer }) => {
            addRenderer({
                name: "astro-van-mdx",
                serverEntrypoint: "van-mdx/astro/server",
                clientEntrypoint: "van-mdx/astro/client",
            });
        },
    },
});
export default astroZikojs;