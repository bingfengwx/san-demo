const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const config = require('./config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:' + config.port })
    ]
});
