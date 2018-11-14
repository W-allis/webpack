var config = require('../config')
var path = require('path')

module.exports = {
  resolve: function (_path) {
    // 如果线上路径和测试路径不同时采用此设置
    var staticPath = process.env.BASE_ENV === 'prod' ? config.build.staticPath : config.dev.staticPath
  
    return path.posix.join(staticPath, _path)
  }
}