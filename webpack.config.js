const webpack = require('webpack')
const slideName = (process.argv.slice(-1)[0])
const isDev = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  slideName,
  devtool: isDev ? 'eval': '',
  watch: isDev,
  entry: {
    lib: ['./src/global'],
    index: [
      `./${slideName}`
    ]
  },
  output: {
    path: `${__dirname}/gh-pages/${slideName}`,
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: '../lib.js'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      title: require(`./${slideName}/conf`).title,
    }),
    new webpack.DefinePlugin({
      __isDev: isDev,
      __bsVer: JSON.stringify(require('browser-sync/package.json').version),
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ].concat(isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]),

  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      }, {
        test: /\.svg$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      }, {
        test: /\.(png|gif|jpg)$/,
        loader: 'url',
      }
    ]
  },
//  externals: {
//    'react': true,
//    'react-dom': true,
//  }
}
