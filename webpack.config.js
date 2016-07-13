
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
      }
    ],
  },
  resolve: {
    ext: ["", ".js", ".jsx"]
  }
}
