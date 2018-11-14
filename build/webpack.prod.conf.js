/**
 * @author wall create at 2018/11/13
 * prod 文件主要是导报配置，和一些线上发布静态资源修改，如需修改，请联系管理员
 */
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var config = require('../config')
var webpack = require('webpack')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path')

var env = require('../config/'+ process.env.BASE_ENV +'.env')

var utils = require('./utils')

module.exports = merge(baseConfig, {
  mode: process.env.BASE_ENV === 'prod' ? 'production' : 'development',
  output: {
    path: config.build.path,
    filename: utils.resolve('./js/[name]_[hash:6].js'),
    // 测试环境还是生产环境
    publicPath: process.env.BASE_ENV === 'prod' ? config.build.assetsPublicPath : config.build._assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new cleanWebpackPlugin(['./dist'], {
      // 根目录
      root: process.cwd(),
      // 过滤掉某些文件
      // exclude: ['package.json'],
      // 开启在控制台输出信息
      verbose: true,
      // 是否允许删除文件
			dry: false
    })
  ]
})