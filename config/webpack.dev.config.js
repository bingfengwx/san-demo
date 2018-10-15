const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const config = require('./config');

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: config.port,
        inline: true,
        stats: { colors: true },
        contentBase: 'dist',
        proxy: config.proxy
    }
});