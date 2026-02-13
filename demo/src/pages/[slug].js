import van from 'vanjs-core'
import hljs from "highlight.js"
import 'highlight.js/styles/github.css';
hljs.highlightAll()
const {section, article, p} = van.tags
export default async function App({slug}= {}){
    const modules = await import.meta.glob('../content/*.mdx');
    const key = Object.keys(modules).find(n=>n.includes(`${slug}.mdx`));
    const module = modules[key];
    if(!module) return p('Error 404')
    const page = (await module())
    const {default : App, title} = page
    const items = App()
    setTitle(title)
    return article(...items)
}

const setTitle = (title) => document.title = title ?? 'van-mdx'