import { defineConfig } from "vite";
import CrankMdx from 'vite-plugin-crank-mdx'
import syntaxHighlightAdapter from '@zikojs/mdx-highlightjs-adapter'

export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "@b9g/crank",
    jsxDev: false,
  },
  plugins:[
    CrankMdx({
      syntaxHighlightAdapter
    })
  ]
});