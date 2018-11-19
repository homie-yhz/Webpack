/**
 *通用配置
 *
 *
 */
const path = require('path') // node 环境变量  路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 将html里面加入打包后的js文件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // tree shaking 插件（这个插件需要安装，原来的webpack原生支持）
const webpack = require('webpack') // 应用一些webpack的插件的时候需要引入webpack

module.exports = {
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        // style-loader:
        // 1.css文件中可以 配置 url('path') 将path 的本地路径 替换为输出目录中的图像的最终路径
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use 代表 应用哪些loader,普通
      },
      {
        // file-loader：
        // 可以通过import在js中引入图片 import png from 'path'
        // 这样的图片会以路径进行展示 而不是 data URL 格式的
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist/*.*'),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.NamedModulesPlugin()
    // new webpack.HotModuleReplacementPlugin() // HMR 热替换模块插件，该插件与 webpack-dev-server 插件合并使用
    // new UglifyJsPlugin() // tree shaking 插件  只要在这里配置一下就好了，webpack源生支持的插件
  ]
}
