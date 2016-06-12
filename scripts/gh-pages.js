import express from 'express'
const server = express()

server
  .use('/slides', express.static(`${__dirname}/../gh-pages`))
  .listen(8080, ()=> {
    console.log(`The server is running: //localhost:8080/slides`)
  })