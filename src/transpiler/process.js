import { 
  componentType,
  processAttribute,
  parseYml,
  hyperscript
} from "../utils/index.js"
import hljs from "highlight.js"
const processMDAST = (markdownAST) => {
    let hasCode = false;
    const transformNode = (node) => {
      switch(node.type){
        case 'mdxjsEsm' : {
          return {
            type : "script",
            value : node.value
          }
        };
        case 'text' : {
          const text = node.value;
          const escaped = text.replace(/"/g, '\\"');
          return `"${escaped}"`;
        };
        case 'mdxTextExpression' : {
          const {value} = node
          return value
        };
        case 'heading' : {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript(`h${node.depth}`,"{}", childNodes);
        };
        case 'paragraph' : {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("p","{}", childNodes)
        };
        case 'strong': {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("strong","{}", childNodes);
        };
        case 'emphasis': {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("em","{}", childNodes);
        };
        case 'link': {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("a", `{ href: "${node.url}" }`, childNodes);
        };
        case 'image': {
          hyperscript("img", `{ src: "${node.url}", alt: "${node.alt || ''}`)
          return `h('img', { src: "${node.url}", alt: "${node.alt || ''}" })`;
        };
        case 'list': {
          const listTag = node.ordered ? 'ol' : 'ul';
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript(listTag, "{}", childNodes);
        };
        case 'listItem': {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("li", "{}", childNodes);
        };
        case 'inlineCode' : {
          return `van.tags.code("${node.value}")`
        }
        case 'code': {
          hasCode = true;
          // const language = node.lang ? `{ 'data-lang': '${node.lang}' }` : '';
          const highlightedCode = hljs.highlightAuto(node.value, [node.lang || '']).value;
          const formatedCode = highlightedCode.replace(/(\r\n|\n|\r)/g, "<br>")    
          return `HTMLWrapper('<pre><code>${formatedCode}</code></pre>').element`
        }  
        case 'blockquote': {
          const childNodes = node.children.map(transformNode).join(', ');
          return hyperscript("blockquote", "{}", childNodes);
        }
        case 'thematicBreak': {
          return `van.tags.hr()`;
        }
        case 'table': {
          const headerRows = node.children[0].children.map(transformNode).join(', ');
          const bodyRows = node.children.slice(1).map(transformNode).join(', ');
          const thead = hyperscript("thead", "{}", hyperscript("tr", "{}", headerRows));
          const tbody = hyperscript("tbody", "{}", bodyRows);
          return hyperscript("table", "{}", [thead, tbody].join(","))
        }
        case 'tableRow': {
          const cells = node.children.map(transformNode).join(', ');
          return `${hyperscript("tr", "{}", cells)}`
          return `${hyperscript("tr", "{}", cells)}.style({border : "1px solid darkblue", borderCollapse: "collapse"})`
        }
        case 'tableCell': {
          const childNodes = node.children.map(transformNode).join(', ');
          return `${hyperscript("td", "{}", childNodes)}`
          return `${hyperscript("td", "{}", childNodes)}.style({border : "1px solid darkblue", borderCollapse: "collapse", padding : "5px"})`
        }
        case 'yaml':{
          const {props, attrs} = parseYml(node.value)
          return {
            type : "yaml",
            props, 
            attrs
          }
        }
        case 'mdxJsxTextElement': {
          const {name, attributes, children} = node;
          const childNodes = children.map(transformNode).join(', ');
          const hasChildren = childNodes.length > 0;
          return `van.tags.${name}(${processAttribute(attributes)}${hasChildren ?`, ${childNodes}`:""})`;
        };
        case 'mdxJsxFlowElement':{
          const {name, attributes, children} = node;
          const childNodes = children.map(transformNode).join(', ');
          const hasChildren = childNodes.length > 0;
          switch(componentType(name)){
            case "jsx" : {
              console.log({
                Component : name, 
                children,
              })
              const f = `${name}(${processAttribute(attributes)}${hasChildren ?`, ${childNodes}`:""})`
              console.log({f})
              return `${name}(${processAttribute(attributes)}${hasChildren ?`, ${childNodes}`:""})`;
            }
            case "html" : {
              return `van.tags.${name}(${processAttribute(attributes)}${hasChildren ?`, ${childNodes}`:""})`;
            }
            case "script" : {
              const statements = [];
              for(let i=0; i<node.children.length; i++) statements.push(node.children[i].children[0].value)
              return {
                type : "script",
                isScript : true,
                value : statements.join("\n")
              }
            }
          }
        }
        default : {
          console.log(node.type)
        }
      }
      return 'null';
    };
    let esm = [];
    let props = "";
    let attrs = "";

    const statements = []
    markdownAST.children.forEach((node) => {
      switch(node.type){
        case 'yaml' : {
          const Transformed = transformNode(node)
          props = Transformed.props;
          attrs = Transformed.attrs;
        } break;
        case 'mdxjsEsm' : esm.push(node.value); break;
        default : {
          const Transformed = transformNode(node);
          if(Transformed.isScript) statements.push(Transformed.value);
          else statements.push(`__items__.push(${Transformed})`)
        }
      }
    });
    return {
      attrs,
      props,
      esm,
      statements,
      hasCode
    }
  };
export {
    processMDAST
}