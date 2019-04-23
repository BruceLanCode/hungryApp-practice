const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.conf')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

let baseConfig = devConfig


module.exports = merge(baseConfig, {
    plugins: [
      new VueSSRClientPlugin()
    ]
})