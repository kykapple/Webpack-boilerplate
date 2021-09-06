const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: process.env.PORT || 3000,
        hot: true,
    },
});