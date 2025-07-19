import van from "vanjs-core";
import "./App.css";
import Article from "./content/Article.mdx"

export const App = () => {
  return Article({border_color : "green"})
};

const root = document.getElementById("app");

van.add(root, App());
