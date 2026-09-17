# MDX Kit

**MDX adapters for lightweight JavaScript UI libraries.**

`mdx-kit` is a collection of MDX integrations for UI libraries and frameworks that don't provide native MDX support.

The project provides framework-specific MDX runtimes, tag helpers, and Vite integrations while keeping the original framework's programming model.

## Packages

### VanJS

* [`van-mdx`](./packages/vanjs/van-mdx) — MDX support for [VanJS](https://vanjs.org/)
* [`vite-plugin-van-mdx`](./packages/vanjs/vite-plugin-van-mdx) — Vite integration for VanJS MDX

### CrankJS

* [`crank-mdx`](./packages/crankjs/crank-mdx) — MDX support for [CrankJS](https://crank.js.org/)
* [`vite-plugin-crank-mdx`](./packages/crankjs/vite-plugin-crank-mdx) — Vite integration for CrankJS MDX

### Mithril

* [`mithril-mdx`](./packages/mithril/mithril-mdx) — MDX support for [Mithril](https://mithril.js.org/)
* [`vite-plugin-mithril-mdx`](./packages/mithril/vite-plugin-mithril-mdx) — Vite integration for Mithril MDX

More integrations may be added over time.

## How It Works

`mdx-kit` transforms MDX into code that uses the target library's native rendering model.

For example, an MDX document such as:

```mdx
# Hello

This is **MDX**.
```

can be compiled into framework-specific code rather than relying on React or a virtual DOM.

The goal is to make MDX available to lightweight and alternative JavaScript UI libraries without forcing them to adopt React's runtime model.

## Repository Structure

```text
mdx-kit/
├── packages/
│   ├── van/
│   │   ├── van-mdx/
│   │   └── vite-plugin-van-mdx/
│   │
│   ├── crank/
│   │   ├── crank-mdx/
│   │   └── vite-plugin-crank-mdx/
│   │
│   └── mithril/
│       ├── mithril-mdx/
│       └── vite-plugin-mithril-mdx/
│
├── demos/
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Development

This repository uses [pnpm](https://pnpm.io/) workspaces.

Install dependencies:

```bash
pnpm install
```

<!-- Run tests:

```bash
pnpm test
```

Build all packages:

```bash
pnpm -r build
```

Run a command in a specific package:

```bash
pnpm --filter van-mdx <command>
``` -->

## Adding an Integration

An integration generally consists of two packages:

```text
packages/<framework>/
├── <framework>-mdx/
└── vite-plugin-<framework>-mdx/
```

The first package provides the framework-specific MDX implementation.

The Vite plugin provides development and build-time integration for Vite projects.

## Design Goals

* **Framework agnostic** : MDX should not be tied to React.
* **Lightweight** : avoid unnecessary runtime abstractions.
* **Native rendering** : generate code using the target library's own APIs.
* **Composable** : framework integrations should remain independent.
* **Vite friendly** : provide first-class Vite integrations where appropriate.
* **Extensible** : make it straightforward to add new MDX targets.

## Status

`mdx-kit` is under active development.

Supported integrations and APIs may change as the project evolves.

## License

See the individual packages for their respective license information.
