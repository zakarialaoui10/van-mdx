import { defineConfig } from "vite";
import VanMdx from 'vite-plugin-van-mdx'
import syntaxHighlightAdapter from '@zikojs/mdx-highlightjs-adapter'
export default defineConfig({
    plugins : [
        VanMdx({
            syntaxHighlightAdapter,
            // marker: '.ziko',
            include : ['**/articles/*'],
            // plugins:[MindElixir()]
        })
    ]
})
