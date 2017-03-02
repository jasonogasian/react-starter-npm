# react-starter-npm

## Notes:

* This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).
* [Advanced Configuration](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration)
* All build functionality is handled by npm scripts in the package.json file.
* It includes a [SASS preprocessor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
  * Note that node-sass seems to have an issue recognizing newly created files on some systems so you might need to restart the watcher when you create a file until it’s resolved.

## Tests:
See the create-react-app [test documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* Run `npm test` to run all test cases

## Dependencies:
* NodeJS v7.7.1+

## Local Installation:
1. [Install Node.js](https://nodejs.org/en/download/)
2. Run `npm install` inside the top-level of the project.

## Development:
* Run `npm start` to start a local server that will watch for changes and reload the app dynamically.
* All development is done in the /src directory.
* CSS styling is handled in SASS (*.scss files) which live in /src/style/. Compiled .css output files are built to /src/style/dist - these files should not be edited directly!
* ECMAScript 2015 support is included and use of "ES6" functionality is encouraged:
  * [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  * [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
  * [Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
  * [Class getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

## Release:
* Run `npm run build` to create a static bundle that can be uploaded to your HTTP server or CDN.
