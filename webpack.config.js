var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/sinterest.js",
  output: {
    path: './app/assets/javascripts',
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
};
