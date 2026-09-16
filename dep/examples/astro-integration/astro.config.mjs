// @ts-check
import { defineConfig } from 'astro/config';
import VanMdx from "van-mdx/astro"

import autoAlias from "astro-auto-alias";

// https://astro.build/config
export default defineConfig({
    integrations : [VanMdx(), autoAlias()]
});