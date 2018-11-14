/**
 * @author wall create at 2018/11/13
 * dev 文件主要是搭建本地服务，不区分环境，基本不需要修改
 */
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var config = require('../config')
var env = require('../config/dev.env')
var webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    publicPath: config.dev.assetsPublicPath,
    port: config.dev.port,
    // 当文件改变自动刷新
    inline: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})