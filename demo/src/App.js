import van from "vanjs-core";
import "./App.css";
// import A, {title} from './App.mdx'

import { createFileBasedRouter } from 'ufbr/van'

const pages = await import.meta.glob('./pages/**/*.js') 
const target = document.getElementById('app');

const {section, nav, header, main} = van.tags

van.add(target, header('Header ...'))

createFileBasedRouter({
  pages,
  target,
  wrapper : (component) => main({}, component)
  //   section(
  //   // {class : 'wrapper'},
  //   // header("Header"),
  //   main({}, component)
  // )
})

// setTimeout(()=>van.add(target, van.tags.nav()), 100)

// console.log({A, title})

// globalThis.A = A



// const {article, nav} = van.tags()

// const root = document.getElementById("app");

// van.add(root, article(A()), nav());
