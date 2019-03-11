module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]-[name]-[local]-[hash:base64]:6',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
