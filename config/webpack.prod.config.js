const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const config = require('./config');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[hash].js',
        publicPath: '/',
        chunkFilename: 'js/[name].[hash].chunk.js',
    },
    mode: 'production',
});