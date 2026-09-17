import { parseMD } from "@zikojs/mdx/parser";
import { processMDAST } from "../preprocessor/index.js";
import { stringifyProps, transformeAttrs } from "@zikojs/mdx/utils";

export const transpileMD = async (
    Markdown,
    {
        plugins = [],
        syntaxHighlightAdapter = null
    } = {}
) => {
    const { ast, frontmatter } = await parseMD(
        Markdown.trimStart(),
        ...plugins
    );

    const {
        esm,
        statements,
        Tags,
        UsesCreateElement
    } = processMDAST(ast, {
        syntaxHighlightAdapter
    });

    const { "MDX.Props": props, ...attrs } = frontmatter;

    const imports = [
        UsesCreateElement
            ? `import { createElement } from "@b9g/crank";`
            : null,
        `import { tags } from "crank-mdx/tags";`,
        ...esm
    ];

    const tagImports = [...Tags].join(", ");

    const body = [
        ...imports,
        transformeAttrs(attrs),

        `export default (${stringifyProps(props)}) => {`,

        tagImports
            ? `const { ${tagImports} } = tags`
            : null,

        "const __items__ = []",

        ...statements,

        "return __items__",
        "}"
    ].filter(Boolean);

    return body.join("\n");
};