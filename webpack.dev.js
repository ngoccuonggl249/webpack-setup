const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 9000, // Change port number
  },
});
