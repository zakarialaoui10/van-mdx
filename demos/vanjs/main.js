import van from 'vanjs-core'
import UI from './articles/test.ziko.mdx'

import hljs from "highlight.js"
import 'highlight.js/styles/github.css';
hljs.highlightAll()

globalThis.items = UI({name : "from MDZjs"})

van.add(document.body, items)

