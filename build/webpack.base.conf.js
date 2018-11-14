/** 
 * @author wall create at 2018/11/13
 * base 文件只对文件做一些处理，解析img,js,less,css,scss,font等等文件
 */
var path = require('path')
var config = require('../config')

var utils = require('./utils')

var htmlWebpackPlugin = require('html-webpack-plugin')
var htmlwebpackconfig = require('./html.webpack.conf')

var entryWebpackConfig = require('./entry.webpack.conf')

var extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: entryWebpackConfig[0],
  output: {
    path: config.dev.path,
    filename: '[name]_[hash:6].js',
    publicPath: process.env.BASE_ENV ? config.build.assetsPublicPath : config.dev.assetsPublicPath 
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body',
      chunks: ['jquery', 'main'],
      favicon: './favicon.ico'
    }),
    new extractTextPlugin({
			filename: utils.resolve('./css/[name]_[hash:6].css'),
			allChunks: true,
			disable: false
		})
  ].concat(htmlwebpackconfig),
  module: {
    rules: [
      {
        test: /\.html(\?.*)$/,
        loader: 'html-loader'
      },
      {
				test: /\.css$/,
				use: extractTextPlugin.extract({
					use: ['css-loader', 'less-loader'],
					fallback: 'style-loader'
				})
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            // compiles Less to CSS
            loader: 'less-loader',
            options: {
              // 这里配置全局变量
              globalVars: {
                // ten可以是ten，也可以是@ten，效果一样，下同
                'ten': '10px',
                'hundred': '100px'
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?.*)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.resolve('./img/[name]_[hash:6].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resolve('media/[name]_[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resolve('fonts/[name]_[hash:7].[ext]')
        }
      }
    ]
  }
}