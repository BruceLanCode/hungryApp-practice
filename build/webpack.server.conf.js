const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const devConfig = require('./webpack.dev.conf')
const prodConfig = require('./webpack.prod.conf')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

let baseConfig = prodConfig
if (process.env.NODE_ENV === 'development') {
  baseConfig = devConfig
}
module.exports = merge(baseConfig, {
  entry: '../src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})