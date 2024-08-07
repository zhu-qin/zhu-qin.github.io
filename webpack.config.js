var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./app/entry.jsx",
  output: {
    filename: "bundle.js",
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
