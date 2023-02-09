const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[index].[contenthash].js',
    },
    plugins: [
      new HtmlwebpackPlugin({
         title: '写代码了',
         template: 'src/assets/index.html'
      })    
    ]
};



