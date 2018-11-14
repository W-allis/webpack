var path = require('path')

/**
 * dev 主要是本地服务配置，其中 staticPath 为分环境打包配置
 */

module.exports = {
  dev: {
    // 不可以随意改动
    assetsPublicPath: '/',

    path: path.resolve(__dirname, '../dist'),

    staticPath: './static',

    port: 9530
  },
  build: {
    // 线上发布地址添加在index.html js script.src 之前 
    assetsPublicPath: '/',
    // 如果是测试环境的话暂不支持此功能
    _assetsPublicPath: '/',

    staticPath: './static',

    path: path.resolve(__dirname, '../dist')
  }
}