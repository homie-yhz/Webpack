/**
  *通用配置
  *
  * 
 */
const path = require("path"); // node 环境变量  路径
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清空文件夹
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 将html里面加入打包后的js文件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // tree shaking 插件（这个插件需要安装，原来的webpack原生支持）
const webpack = require("webpack"); // 应用一些webpack的插件的时候需要引入webpack

module.exports = {
  entry: {
    app: "./src/index.js"
    // print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js"
  }
};
