const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
};
