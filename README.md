# Middle Messenger

[![Netlify Status](https://api.netlify.com/api/v1/badges/14597e20-a13a-4e12-9baa-9de5a05bd954/deploy-status)](https://app.netlify.com/sites/middle-messenger-chausme/deploys)

Messenger app built on top of [existing API](https://ya-praktikum.tech/api/v2/swagger) as per [Figma mockups](https://www.figma.com/file/sBhmIq6yUZIqBLoANYJkTh/Middle-Front-end-Chat-App)

## Demo

-   [Render + Webpack](https://middle-messenger.onrender.com) - could start with ~30 seconds delay due to free plan specifics
-   [Netlify + Parcel](https://middle-messenger-chausme.netlify.app) (discontinued)

## Installation

-   Add .env file with `API_BASE_URL` variable, default value is `https://ya-praktikum.tech/api/v2`
-   Run `npm install`

## Usage

-   `npm run prepare`
-   `npm run dev` - start dev server at `http://localhost:3000`
-   `npm run build` - create build at `./dist`
-   `npm run start` - create build and start Express server at `http://localhost:3000`
-   `npm run serve` - start Express server at `http://localhost:3000` with an existing build
-   `npm run tswatch` - start TypeScript compiler with `--watch` parameter
-   `npm run lint` - run ESLint with `--quite` parameter and Stylelint
-   `npm run lint:scripts` - run ESLint with `--quite` parameter
-   `npm run slint:styles` - run Stylelint
-   `npm test` - run basic tests

## Stack/Tools

-   [Typescript](https://www.typescriptlang.org)
-   [PostCSS](https://postcss.org)
-   [Handlebars](https://handlebarsjs.com)
-   [Webpack](https://webpack.js.org)
-   [ESLint](https://eslint.org) with [airbnb-base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
-   [Prettier](https://prettier.io)
-   [Stylelint](https://stylelint.io) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
-   [Jest](https://jestjs.io)
-   [Husky](https://github.com/typicode/husky)
-   [Render](https://render.com)
-   [Docker](https://www.docker.com)

## Sprint 4

### Pull request - https://github.com/chau5/middle.messenger.praktikum.yandex/pull/17

#### Updates

-   Added basic tests for block component, a custom router and HTTP class
-   Converted from Parcel to Webpack including some required refactoring
-   Added Dockerfile and deployed the app to Render at [https://middle-messenger.onrender.com](https://middle-messenger.onrender.com), it could start with ~30 seconds delay due to free plan specifics
-   Added precommit check with Husky
-   Checked npm packages and confirmed there are no vulnerabilities

## Sprint 3

### Pull request - https://github.com/chau5/middle.messenger.praktikum.yandex/pull/13

#### Updates

-   Refactored form validation to be input based
-   Added Block general CSS classes support to avoid optional properties on some components
-   Refactored components to support required routes e.g. `/messenger`
-   Updated previously implemented router with browser history support
-   Implemented Sign In functionality
-   Updated router with auth check
-   Added store for state manipulation
-   Implemented HTTP APIs for Settings, Chats and Auth
-   Refactored components to support API data
-   Added WebSocket support with a singleton class for chat real-time messages
-   Implemented custom pop-up components following original mockups

## Sprint 2

### Pull request - https://github.com/chau5/middle.messenger.praktikum.yandex/pull/9

#### Updates

-   Refactored to TypeScript with basic types
-   Implemented Event Bus class and basic Block component
-   Rebuilt existing simple components as classes based on Block component
-   Refactored some components and modules, added a few new ones
-   Updated ESLInt setup to make it work with TypeScript and fixed JS code
-   Added Stylelint and fixed CSS rules
-   Implemented submit events for 3 x forms
-   Added validation for 3 x forms and different field types
-   Implemented HTTPTransport as a simple Fetch API alternative

## Sprint 1

### Pull request - https://github.com/chau5/middle.messenger.praktikum.yandex/pull/6

-   There is no own messages sent/read output
-   There are no pop-ups implemented including Account password update functionality
-   There is no edit state for Account fields including avatar i.e. there is no `name="avatar"` input

## Credits

-   Icons by [Gene](https://cogentgene1.gumroad.com/) from [256 Brutalist Element Mega Pack](https://cogentgene1.gumroad.com/l/brutalist)
-   Pineapple image by [Fernando Andrade](https://unsplash.com/@thisisnando)
-   Lemonade image by [Pixzolo Photography](https://unsplash.com/@pixzolo)
