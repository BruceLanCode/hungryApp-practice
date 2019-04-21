const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.conf')
const prodConfig = require('./webpack.prod.conf')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

let baseConfig = prodConfig
if (process.env.NODE_ENV === 'development') {
  baseConfig = devConfig
}

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    plugins: [
      new VueSSRClientPlugin()
    ]
})