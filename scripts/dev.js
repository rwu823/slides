import webpack from 'webpack'
import webConf, {slideName} from '../webpack.config.js'
import gu from 'gulp'
import del from 'del'
import bs from 'browser-sync'

const slide = `gh-pages/${slideName}`
del.sync(slide)

webpack(webConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true,
    chunkModules: false,
  }))
})
  
bs.create()
  .init({
    files: [`${slide}/*.js`]
  })
require('./gh-pages')