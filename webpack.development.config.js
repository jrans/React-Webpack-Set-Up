var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      "./src/"
    ],
    output: {
      publicPath: "/public/"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    inline: true,
    progress: true,
    colors: true
};
