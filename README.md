# webpack-setup

## Code style
Follow [Google Style](https://google.github.io/styleguide/):
 - **HTML/CSS**: [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html).
 - **JavaScript**: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
 
Installing the google styleguide settings in intellij and eclipse: https://github.com/HPI-Information-Systems/Metanome/wiki/Installing-the-google-styleguide-settings-in-intellij-and-eclipse
## Require
-   Install [Node.js](https://nodejs.org/) (Included npm).

## Install package
    npm install

## Run server
Running local development server:

    npm start

By default, server is running on http://localhost:9000/, you can change port by edit `devServer.port` in `webpack.dev.js` file.

When you run `npm start`, ESLint is running with the server to check your code style. 

 - You can check in other terminal by running `npm run checkjs`.
 - If you want ESLint fix your code automation, please running `npm run fixjs`.
## Build

    npm run build

## Product
Product is build in `/dist` folder
