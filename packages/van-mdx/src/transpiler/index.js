import { parseMD } from "@zikojs/mdx/parser";
import { processMDAST } from "@zikojs/mdx/preprocessor";
import { stringifyProps, transformeAttrs } from "@zikojs/mdx/utils";

const transpileMD = async (Markdown, {plugins = [], syntaxHighlightAdapter = null} = {})=>{
    const {ast, frontmatter} = await parseMD(Markdown.trimStart(), ...plugins);
    const {esm, statements, hasCode, Tags}= processMDAST(ast, {syntaxHighlightAdapter});

    const { 'MDX.Props': props, ...attrs } = frontmatter;

    const importHTMLWrapper = hasCode ? 'import {HTMLWrapper} from "van-mdx/components"' : '';

    const body = [
        `import van from 'vanjs-core';`,
        importHTMLWrapper,
        ...esm,
        transformeAttrs(attrs),
        `export default (${stringifyProps(props)})=>{`,
        `const {${[...Tags].join(', ')}} = van.tags`,
        'const __items__ = []',
        ...statements,
        'return __items__',
        '}',
      ].filter(Boolean)
    return body.join("\n");
}
export{
    transpileMD
}