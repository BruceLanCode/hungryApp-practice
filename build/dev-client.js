var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
var proxyMiddleware = require('http-proxy-middleware')
const clientConfig = require('./webpack.client.conf.js')

const compiler = webpack(clientConfig)
const express = require('express')
const app = express()

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

app.use(devMiddleware(compiler, {
  quiet: true
}))
app.use(hotMiddleware)

app.listen(3000, () => console.log('listening on port 3000'))
