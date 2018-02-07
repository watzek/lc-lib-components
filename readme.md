# lewis & clark web components

[![npm version](https://img.shields.io/npm/v/lc-lib-components.svg)](https://www.npmjs.com/package/lc-lib-components)

this is the repository for web components shared between watzek and boley libraries. the components are generated using [stencil](https://stenciljs.com/), a compiler that outputs cross-browser compatible custom elements. components are written using typescript and jsx, in a react-like style.

## Getting Started

These instructions will let you develop and preview the components on your local machine. See "deployment" for instructions on making changes to the production library website.

### Prerequisites

- latest node LTS
- a javascript package manager [(give `yarn` a try!)](http://yarnpkg.com/)
- latest version of a modern browser - chrome works well

### Installing

clone the repository:
```sh
$ git clone https://github.com/watzek/lc-lib-components
```

install dependencies:
```sh
$ cd lc-lib-components
$ yarn install # or npm install
```

## Developing
run a development server (a browser window will open):
```sh
$ yarn dev # or npm run dev
```
all of the content in `www` is auto-generated to run the dev server. **don't make changes to this folder** - they will be overwritten.

you can edit component files located in `src` to change the components. to play with different arrangements and test out the components, you can edit `src/index.html`.

## Deployment
to build a production bundle of the components:
```sh
$ yarn build # or npm run build
```

you can make the changes public by publishing to `npm`:
```sh
$ npm version minor # or one of (major|minor|patch)
$ npm publish
```

the library website references the `npm` package to load the components by using [unpkg](https://unpkg.com/#/). you can update the code in springshare's cms to ensure that it's loading the latest version.

## Built With

* [Stencil](https://stenciljs.com/) - component compiler
* [TypeScript](https://www.typescriptlang.org/) - component definition language

## Contributing

(coming soon...)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases page](https://github.com/watzek/lc-lib-components/releases).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details