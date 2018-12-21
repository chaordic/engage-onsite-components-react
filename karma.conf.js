const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      './test/*.spec.js',
    ],
    exclude: [],
    preprocessors: {
      './test/*.spec.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
