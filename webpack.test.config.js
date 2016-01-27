var WebpackOnBuildPlugin = require('on-build-webpack');
var child_process        = require('child_process');

module.exports = {
    entry: [
      __dirname + '/test'
    ],
    output: {
      path: __dirname + '/test',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
      ]
    },
    target: 'node',
    watch: true,
    plugins: [
      new WebpackOnBuildPlugin(function () {
        child_process.exec(
          'npm run test:bundle',
          function (error, stdout) {
            console.log(stdout && 'stdout: ' + stdout);
            if (error !== null) {
              console.log(error && 'exec error:' + error);
            }
          }
        );
      })
    ]
};
