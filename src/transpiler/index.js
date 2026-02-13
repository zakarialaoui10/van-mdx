import{
    parseMD,
    processMDAST,
    stringifyProps,
    transformeAttrs
} from 'mdzjs'

const transpileMD = async (Markdown, {plugins = []} = {})=>{
    const {ast, frontmatter} = await parseMD(Markdown.trimStart(), ...plugins);
    const {esm, statements, hasCode, Tags}= processMDAST(ast);

    const { 'Van.Props': props, ...attrs } = frontmatter;

    const body = [
        "import van from 'vanjs-core'",
        hasCode ?? "import {HTMLWrapper as _HTMLWrapper} from 'ziko/ui';",
        hasCode ?? "const HTMLWrapper = (html) => _HTMLWrapper(html).element;",
        ...esm,
        transformeAttrs(attrs),
        `export default (${stringifyProps(props)})=>{`,
        `const {${[...Tags].join(', ')}} = van.tags`,
        'const __items__ = []',
        ...statements,
        'return __items__',
        '}',
      ]

    // if(hasCode) body.unshift(`import("highlight.js/styles/${CodeStyle}.css")`);
    return body.filter(Boolean).join("\n");
}
export{
    transpileMD
}