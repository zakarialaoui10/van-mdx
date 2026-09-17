import 'highlight.js/styles/github.css';

import m from 'mithril';

import Hello from './test.mdx';

m.mount(document.body, {
    view: () => Hello()
});