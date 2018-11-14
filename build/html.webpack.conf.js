var htmlWebpackPlugin = require('html-webpack-plugin')
var glob = require('glob')

function extractHtml(name) {
  return new htmlWebpackPlugin({
    filename: `views/${name}/${name}.html`,
    template: `./src/views/${name}/${name}.html`,
    inject: 'body',
    chunks: ['common', name],
    head: {
      css: `${name}.css`
    }
  }) 
}

var mg = glob.sync('src/views/*/*.html').map(function(path) {
  var name = /src\/views\/(.*)\/(.*).html/.exec(path)[1]
  return extractHtml(name)
})

module.exports = mg