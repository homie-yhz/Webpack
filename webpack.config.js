const path = require('path') // node 环境变量  路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 将html里面加入打包后的js文件
const webpack = require('webpack') // 应用一些webpack的插件的时候需要引入webpack
/**
 * 这个配置是 应用webpack-dev-server 插件以及 HotModuleReplacementPlugin 进行的HMR
 * 但是有个问题：
 * 引入的css以及js改变后都会刷新 ，更改主页的html文件并不会刷新
 * 如果不引入HMR插件  HotModuleReplacementPlugin 的话 在去掉 hot:true 等配置 就可以完全刷新了
 */
/*
module.exports = {
  // 模式选择
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
  },
  // 开起sourcemap 定位错误代码功能 如果是production 生产模式，打包后的代码是杂乱无章的，
  // 会无法定位错误点，但是启用了source map功能
  // 虽然是生产的代码  但是还是可以定位到错误点
  devtool: 'inline-source-map',
  // webpack-dev-server 插件(自动刷新页面) devServer 里面是 这个插件的一些配置，可能源生就支持这个
  // ，所以可以在这里面进行相应的配置
  devServer: {
    // 告诉服务器从哪里提供内容
    contentBase: './dist',
    // hot 这个配置是 与HotModuleReplacementPlugin 一起使用的，如果用了这个插件，hot就需要设置
    hot: true,
    historyApiFallback: true //不跳转
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin() // HMR 热替换模块插件，该插件与 webpack-dev-server 插件合并使用
  ]
}
*/
/**
 * 下面这个配置是 应用
 * webpack-dev-middleware
 * webpack-hot-middleware
 * express 服务进行的配置
 * 还需要配置publicPath
 * 而且还需要配置一个 静态服务器 express 的程序
 * 这个程序 一般写在 server.js 里面
 */

module.exports = {
  // 模式选择
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    // 如果我们要用webpack-dev-middleware 这个中间件的时候 需要设置publicPath 然后配合express 服务使用
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器从哪里提供内容
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
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
  ]
}

/**
 * 上面两种开发的方式本质是一样的
 * 只不过webpack-dev-middleware 这种方式 更加的灵活，、
 * 就是我们截断了中间的一个打包的一个过程，然后可以自己操作这个过程，
 * 在将处理好的过程加入到最后的webpack打包当中
 *
 */
