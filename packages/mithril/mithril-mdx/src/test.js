import { transpileMD } from "./transpiler/index.js";

const js = await transpileMD(`
    # Title 1
    `)

console.log(js)