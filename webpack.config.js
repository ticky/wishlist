const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: ['.js']
  },
  
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.ya?ml$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'json-loader', 'yaml-loader' ]
      },
      {
        test: /\.mdx$/,
        exclude: [ /node_modules/ ],
        use: [
          { loader: 'babel-loader' },
          { loader:'markdown-component-loader' }
        ]
      }
    ],
  },

  devtool: 'source-map',
  
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  }
}