import { defineConfig } from "vite";
import CrankMdx from 'vite-plugin-crank-mdx'


export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "@b9g/crank",
    jsxDev: false,
  },
  plugins:[
    CrankMdx()
  ]
});