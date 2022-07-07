require("dotenv").config();

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, "src/js/client.js")
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    }]
  },
  mode: debug ? "development" : "production",
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "client.min.js",
  },
  plugins: [],
  devServer: {
    static: {
      directory: path.join(__dirname, '/public/'),
    }
  }
};