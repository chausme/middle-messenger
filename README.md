# Middle Messenger

[![Netlify Status](https://api.netlify.com/api/v1/badges/06863d0f-aea7-4ee5-9a60-8c1950ee39cd/deploy-status)](https://app.netlify.com/sites/middle-messenger-chausme/deploys)

Messenger app made from scratch in 4 x biweekly sprints including these development stages:

-   Structure planning
-   Creation of [Figma mockups](https://www.figma.com/file/sBhmIq6yUZIqBLoANYJkTh/Middle-Front-end-Chat-App)
-   Building custom Event Bus driven general component with basic lifecycle and state management
-   Simple router and HTTP transport class implementation with [Auth/User/Chat APIs](https://ya-praktikum.tech/api/v2/swagger) support
-   Building WebSocket based messaging system

## 📟 [Demo](https://middle-messenger-chausme.netlify.app)

![chrome_iM5y2hWKMa](https://user-images.githubusercontent.com/8984203/223350079-98644854-ec41-4036-9c19-74fd73fafb25.gif)

## Installation

-   Add `.env` file based on `.env.example` file or set `API_BASE_URL` env variable manually e.g. on Netlify
-   Run `npm install`

## Usage

-   `npm run dev` - start dev server at `http://localhost:3000`
-   `npm run build` - create build at `./dist`
-   `npm run start` - create build and start Express server at `http://localhost:3000`
-   `npm run serve` - start Express server at `http://localhost:3000` with an existing build
-   `npm run netlify` - create Netlify build and start Express server at `http://localhost:3000`
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
-   [Docker](https://www.docker.com)

## Credits

-   Icons by [Gene](https://cogentgene1.gumroad.com/) from [256 Brutalist Element Mega Pack](https://cogentgene1.gumroad.com/l/brutalist)
-   Pineapple image by [Fernando Andrade](https://unsplash.com/@thisisnando)
-   Lemonade image by [Pixzolo Photography](https://unsplash.com/@pixzolo)
