const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const clientConfig = require('./webpack.client.conf.js')

const compiler = webpack(clientConfig)
const express = require('express')
const app = express()

app.use(devMiddleware(compiler))

app.listen(3000, () => console.log('listening on port 3000'))