// @ts-check
import { defineConfig } from 'astro/config';
import VanMdx from "van-mdx/astro"

// https://astro.build/config
export default defineConfig({
    integrations : [
        VanMdx()
    ]
});
