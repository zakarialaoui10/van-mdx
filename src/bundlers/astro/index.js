const AstroVanMdx = () => ({
    name: "astro-van-mdx",
    hooks: {
        "astro:config:setup": async ({ addRenderer }) => {
            addRenderer({
                name: "astro-zikojs",
                serverEntrypoint: "van-mdx/astro/entry-server",
                clientEntrypoint: "van-mdx/astro/entry-client",
            });
        },
    },
});
export default AstroVanMdx;