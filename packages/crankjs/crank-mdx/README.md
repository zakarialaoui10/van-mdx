# crank-mdx

A Markdown preprocessor for [Crankjs](https://crank.js.org//). 
It combines the simplicity of Markdown syntax with the power and flexibility of ***Javascript***

## Install & Config :

### Vite

```console
npm i crank-mdx vite-plugin-crank-mdx
```

```js
import {defineConfig} from "vite"
import CrankMdx from vite-plugin-crank-mdx
export default defineConfig({
    plugins : [
        CrankMdx({
            // options
        })
    ]
})
```

## Usage :

- ***Article.mdx :***
```jsx
---
 title : "crank-Mdx Starter" 
 name : "world"
 MDX.Propos : 
   background : "tomato"
   data : []
---

import data from "./data.js";
import InteractiveComponent from "./InteractiveComponent.jsx";

# Hello {name}

<InteractiveComponent data={data} background={tomato}/>
```

```jsx
// main.js
import {renderer} from "@b9g/crank/dom";
import InteractiveArticle,{title} from "./Article.mdx"
renderer.render(
 <InteractiveArticle background='orange' />,
 document.body
);
```

## Features :

- ***Simple Integration :*** Write Markdown as usual, and inject Vanjs components wherever needed.
- ***Extensible :***  Create custom interactive components using `Vanjs` and use them in any Markdown file.
- ***Reusable :*** `crank-Mdx` exports a default functional component, allowing you to call it multiple times with different data, enabling dynamic and versatile use.
- ***Frontmatter Support :*** Use `YAML` syntax in to include metadata like titles, descriptions, or configurations in your Markdown files, and define props to pass data dynamically to Zikojs components.
- ***Markdown Support :*** Use standard Markdown syntax for writing content.
- ***HTML Support :*** Use standard HTML syntax for writing content.
- ***JSX Syntax :*** Declare component using Vanjs Hyperscript syntax, and render it using JSX
- ***Props :*** Pass data to components through props, enabling dynamic rendering and customization of content within your Markdown files.
- ***Attributes:*** 
- ***ESM : :***  Supports ECMAScript Modules (ESM), allowing you to import and export modules
- ***Expressions :*** crank-Mdx lets you use JS expressions inside curly braces, like Hello {name}. These expressions can be full JS programs, as long as they evaluate to something renderable. For example, you can use an IIFE like this:
```js
Hello {(()=>{
    const names = ["world", "everyone"];
    const {length} = names
    return names[Math.floor(Math.random()*length)]
})()}
```
- ***Internal scripts :*** Include JS logic that runs alongside crank-Mdx components but isn't rendered in the output. They can initialize variables or perform side effects...
- ***Interleaving :*** You can use inline markdown elements inside HTML or Vanjs Components 
```jsx
<p>
 ***Hello {name}***
</p>
```


# ⭐️ Show your support
If you appreciate the project, kindly demonstrate your support by giving it a star!

# Licence
This projet is licensed under the terms of MIT License
