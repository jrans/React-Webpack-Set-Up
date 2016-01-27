# React-Webpack-Set-Up
Simple set up including hot reloading for a React web app. Allows for es2015 and react presets in the .babelrc so es6 away!

Continuous testing set up too by watching, babelifying, bundling then running the tests.

## How to work it!

### Developing

In your command line run ```npm run dev:serve```

This will build your react app for development from src/index.js and run a development sever on port 8080. Visit localhost:8080/public, in the browser where the app will be served and reload with every change of code (holding state) as you develop.

Super cool eh?

### Continuous Testing

So you are taking advantage of React and throwing ES6 in here there and everywhere but now you want to test it.

Simply require in all your test scripts into test/index.js

In your command line run ```npm run dev:test``` This will watch the code, bundle the test code (caching so no slow running) and then run your ```test:bundle``` script. I have chosen to use [tape](https://github.com/substack/tape) but you can just change the test script!

### Production

TODO: Write webpack config that has all performance enhancements known! #10
Any suggestions please say but you should really have enough knowledge from the two existing configs to write your own

## Webpack & Babel

All of this is thanks to webpack and babel. I could spout all the reasons for all my choices of configuration but see the webpack.config.js and .babelrc files and the docs to fully understand what is going on.
[webpack configuration](https://webpack.github.io/docs/configuration.html)
[babelrc](https://babeljs.io/docs/usage/babelrc/)

#### Please help and make improvements on this setup

All comments, suggestions, questions welcome. Just create an issue!
