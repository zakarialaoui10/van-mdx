import {renderer} from "@b9g/crank/dom";

import Hello from './test.mdx'
console.log(1)

globalThis.Hello = Hello

renderer.render(Hello(), document.body);