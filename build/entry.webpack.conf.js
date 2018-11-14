var glob = require('glob')

var commonEntry = {
  main: './src/main',
  common: './src/common'
}

var mg = glob.sync('src/views/*/*.js').map(function(path) {
  var name = /src\/views\/(.*)\/(.*).js/.exec(path)[1]
  return Object.assign(commonEntry, { [name]: './' + path })
})

module.exports = mg