import './style.css'
import van from 'vanjs-core'
import UI from './articles/test.van.mdx'

import 'highlight.js/styles/github.css';

globalThis.items = UI({name : "from MDZjs"})

van.add(document.body, items)

