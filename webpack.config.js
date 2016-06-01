var path = require('path')
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')

var production = process.env.NODE_ENV === 'production'

var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

var plugins = []

if (production) {
  plugins = plugins.concat([
    new CleanPlugin('builds'),
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
          warnings: false,
      }
    })
  ]);
}

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/assets/'
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /pixi.js/, loader: "expose?PIXI" },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' }
    ]
  },

  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
    }
  },

  debug: !production,
  devtool: production ? false : '#eval-source-map'
}
