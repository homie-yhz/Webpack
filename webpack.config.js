const path = require('path') // node 环境变量  路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 将html里面加入打包后的js文件

module.exports = {
  // 模式选择
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
    /** 如果我们要用webpack-dev-middleware 这个中间件的时候 需要设置publicPath 然后配合express 服务使用*/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/'
  },
  /**
   * 开起sourcemap 定位错误代码功能 如果是production 生产模式，打包后的代码是杂乱无章的，
   * 会无法定位错误点，但是启用了source map功能
   * 虽然是生产的代码  但是还是可以定位到错误点
   */
  devtool: 'inline-source-map',
  // webpack-dev-server 插件 自动刷新页面
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        /**
         * style-loader:
         * 1.css文件中可以 配置 url('path') 将path 的本地路径 替换为输出目录中的图像的最终路径
         *
         */
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use 代表 应用哪些loader,普通
      },
      {
        /**
         * file-loader：
         * 可以通过import在js中引入图片 import png from 'path'
         * 这样的图片会以路径进行展示 而不是 data URL 格式的
         */
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
    new HtmlWebpackPlugin({ template: './index.html' })
  ]
}
