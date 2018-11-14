console.log('i have start project')

console.log(process.env.base_api)

var reg = /src\/views\/(.*)\/(.*).html/

var path = 'src/views/list/list.html'

console.dir(reg.exec(path))

// console.log($)