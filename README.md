# van-mdx

A Markdown preprocessor for [Vanjs](https://vanjs.org/). 
It combines the simplicity of Markdown syntax with the power and flexibility of ***Javascript***

## Demos : 
 - ***Hello World*** : 
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/zakarialaoui10/van-mdx/tree/main/examples/hello-world?file=src%2Fcontent%2FArticle.mdx)

## Install : 

```bash
npm i van-mdx@latest
```

## Config :

```js
import {defineConfig} from "vite"
import VanMdx from "van-mdx/vite"
export default defineConfig({
    plugins : [
        VanMdx()
    ]
})
```

## Usage :

- ***Article.mdx :***
```jsx
---
 title : "Van-Mdx Starter" 
 name : "world"
 __props__ : 
   background : "tomato"
   data : []
---

import data from "./data.js";
import InteractiveComponent from "./InteractiveComponent.js";

# Hello {name}

<InteractiveComponent data={data} background={tomato}/>
```

```js
// main.js
import van from "vanjs-core"
import InteractiveArticle,{title} from "./Article.mdx"

const {article} = van.tags;

const Article_1 = article(
    InteractiveArticle({
        background : "yellow"
    })
)

van.add(
    Article_1
)
```

## Features :

- ***Simple Integration :*** Write Markdown as usual, and inject Vanjs components wherever needed.
- ***Extensible :***  Create custom interactive components using `Vanjs` and use them in any Markdown file.
- ***Reusable :*** `Van-Mdx` exports a default functional component, allowing you to call it multiple times with different data, enabling dynamic and versatile use.
- ***Frontmatter Support :*** Use `YAML` syntax in to include metadata like titles, descriptions, or configurations in your Markdown files, and define props to pass data dynamically to Zikojs components.
- ***Markdown Support :*** Use standard Markdown syntax for writing content.
- ***HTML Support :*** Use standard HTML syntax for writing content.
- ***JSX Syntax :*** Declare component using Vanjs Hyperscript syntax, and render it using JSX
- ***Props :*** Pass data to components through props, enabling dynamic rendering and customization of content within your Markdown files.
- ***Attributes:*** 
- ***ESM : :***  Supports ECMAScript Modules (ESM), allowing you to import and export modules
- ***Expressions :*** Van-Mdx lets you use JS expressions inside curly braces, like Hello {name}. These expressions can be full JS programs, as long as they evaluate to something renderable. For example, you can use an IIFE like this:
```js
Hello {(()=>{
    const names = ["world", "everyone"];
    const {length} = names
    return names[Math.floor(Math.random()*length)]
})()}
```
- ***Internal scripts :*** Include JS logic that runs alongside Van-Mdx components but isn't rendered in the output. They can initialize variables or perform side effects...
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