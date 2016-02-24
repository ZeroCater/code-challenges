module.exports = {
  entry: './app.js',
  output: {
    path: '.',
    filename: 'app-bundle.js',
  },
  resolve: {
    root: __dirname,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ],
  },
}
