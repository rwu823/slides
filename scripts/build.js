import webpack from 'webpack'
import webConf, {slideName} from '../webpack.config.js'
import del from 'del'

const slide = `gh-pages/${slideName}`
del.sync(slide)

webpack(webConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true,
    chunkModules: false,
  }))
})