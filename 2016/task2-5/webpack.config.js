var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/untitled.js'),
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
  }
};