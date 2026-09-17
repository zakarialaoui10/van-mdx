import './style.css'
import 'highlight.js/styles/github.css';

import {renderer} from "@b9g/crank/dom";
import Hello from './test.mdx'

renderer.render(Hello(), document.body);