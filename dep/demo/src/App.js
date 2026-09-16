import van from "vanjs-core";
import "./App.css";
// import A, {title} from './App.mdx'

import { createFileBasedRouter } from 'ufbr/van'
import {TableOfContents} from 'van-mdx/components'


const pages = await import.meta.glob('./pages/**/*.js') 
const target = document.getElementById('app');

const {section, nav, header, main} = van.tags

// setTimeout(()=>{
//   globalThis.c = TableOfContents()
// }, 100)




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
// document.addEventListener('DOMContentLoaded', ()=>{
//   globalThis.c = TableOfContents({depth : 6, content : document.body})
//   target.append(c)
//   // console.log(c.children[0].children)
// })

globalThis.c = TableOfContents({depth : 6, content : document.body})
target.append(c)


