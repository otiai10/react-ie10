
module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: './index.js'
  },
  module: {
    loaders: [
      {
        test: /js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
    ],
  },
  resolve: {
    ext: ["", ".js", ".jsx"]
  }
}
