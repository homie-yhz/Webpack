/**
 * 如果开发模式选择的是：
 * 1.webpack-dev-middleware 中间件
 * 2.配置publicPath
 * 3.以及配合express 等后端服务器使用的时候
 * 会需要新增一个单独的配置文件
 *
 * 然后script 标签里面重新建立  node server.js 命令
 *
 */

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n')
})
