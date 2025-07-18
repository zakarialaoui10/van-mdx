import { parseMarkdown } from "mdzjs";
import { processMDZAST } from "./process.js";
import { stringifyProps } from "../utils/parse-yml.js";

const transpileMD=(Markdown)=>{
    const ast = parseMarkdown(Markdown);
    const {attrs, props, esm, statements, hasCode}= processMDZAST(ast)
    const body = [
        'import van from "vanjs-core"',
        attrs,
        ...esm,
        `export default (${stringifyProps(props)})=>{`,
        'const __items__ = []',
        ...statements,
        "const UI = van.tags.div(...__items__)",
        "return UI }"
      ]
    return body.join("\n");
}
export{
    transpileMD
}