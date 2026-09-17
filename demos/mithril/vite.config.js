import { defineConfig } from "vite";
import MithrilMdx from 'vite-plugin-mithril-mdx'
import syntaxHighlightAdapter from '@zikojs/mdx-highlightjs-adapter'

export default defineConfig({
  esbuild: {
    jsx: "transform",
    jsxFactory: "m",
    jsxFragment: "'['",
  },
  plugins:[
    MithrilMdx({
      syntaxHighlightAdapter
    })
  ]
});