// 开发环境配置
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  /**
   * 开发环境或者是wbepack-dev-server 的配置信息
   */
  devServer: {
    // 告诉服务器从哪里提供内容
    contentBase: './dist',
    //port: 8081,
    // hot 这个配置是 与HotModuleReplacementPlugin 一起使用的，如果用了这个插件，hot就需要设置
    hot: true,
    //使用HTML5 history API 的时候，设置请求路径错误返回404页面用
    historyApiFallback: true // true 的意思表示 任意404 的相应都可能需要呗替换为index.html(主页)
  }
})
