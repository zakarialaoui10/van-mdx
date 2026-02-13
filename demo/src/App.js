import van from "vanjs-core";
import "./App.css";
// import A, {title} from './App.mdx'

import { createFileBasedRouter } from 'ufbr/van'

const pages = await import.meta.glob('./pages/**/*.js') 
const target = document.getElementById('app')

createFileBasedRouter({
  pages,
  target,
})

// setTimeout(()=>van.add(target, van.tags.nav()), 100)

// console.log({A, title})

// globalThis.A = A



// const {article, nav} = van.tags()

// const root = document.getElementById("app");

// van.add(root, article(A()), nav());
