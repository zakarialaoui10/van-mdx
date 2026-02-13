import van from "vanjs-core";
import "./App.css";
import A, {title} from './App.mdx'

console.log({A, title})

globalThis.A = A
import Counter from "./components/Counter";



const {article, nav} = van.tags()

const root = document.getElementById("app");

van.add(root, article(A()), nav());
