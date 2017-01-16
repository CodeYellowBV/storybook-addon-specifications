'use strict';

var path = require('path');
var methods = ['specs', 'describe', 'it', 'beforeEach', 'afterEach', 'after', 'before', 'xit', 'fit', 'xdescribe'];
var externals = {
  'jsdom': 'window',
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': 'window',
  'react/addons': true
};
methods.forEach(function (m) {
  return externals[m] = true;
});

var testMethodLoader = {
  test: require.resolve('./'),
  loader: 'expose-members?' + methods.join(',')
};

module.exports = {
  testMethodLoader: testMethodLoader,
  module: {
    loaders: [testMethodLoader]
  },
  resolve: {
    alias: {
      'storybook-addon-specifications': path.join(__dirname, '../dist')
    }
  },
  externals: externals
};