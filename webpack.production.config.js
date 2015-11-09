var webpack = require('webpack');

module.exports = {

    entry: [
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
