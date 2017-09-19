var webpack = require('webpack');
var merge = require('webpack-merge')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConf = require('./build/webpack.base.config')

var config = merge(baseConf,{
devServer: {
    contentBase: __dirname + '/client',
},
devtool: "#cheap-module-eval-source-map", // Default development sourcemap
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'client/static/index.html',
        inject: true
    }),
    new FriendlyErrorsPlugin()
]
})


module.exports = config;