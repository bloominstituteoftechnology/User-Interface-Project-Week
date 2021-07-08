const path = require('path');

module.exports = {
  entry: {
    index: './src/static/js/index.js',
    services: './src/static/js/services.js',
    contact: './src/static/js/contact.js'

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.(less|css)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          // outputPath: '../../../dist',
          publicPath: '../../../dist'
        }
      }]
    }]
  }
};
