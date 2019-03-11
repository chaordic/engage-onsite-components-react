const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },

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

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      syntax: 'scss',
    }),
  ],
};
