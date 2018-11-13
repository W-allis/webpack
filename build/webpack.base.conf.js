/** 
 * @author wall create at 2018/11/13
 * base 文件只对文件做一些处理，解析img,js,less,css,scss,font等等文件
 */
var path = require('path')
var config = require('../config')

module.exports = {
  entry: {
    jquery: 'jquery',
    main: './src/main'
  },
  output: {
    path: config.dev.path,
    filename: '[name]_[hash:6].js',
    publicPath: process.env.BASE_ENV ? config.build.assetsPublicPath : config.dev.assetsPublicPath 
  }
}