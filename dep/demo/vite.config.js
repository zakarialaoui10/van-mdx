import { defineConfig } from "vite";
import VanMdx  from 'van-mdx/loaders/vite'

export default defineConfig({
    plugins:[
        VanMdx()
    ]
});
