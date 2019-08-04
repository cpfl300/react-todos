const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-typescript'
            ]
          }
        }
      },
      { 
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    alias: {
      "@template": path.resolve("./app/templates"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  }
}