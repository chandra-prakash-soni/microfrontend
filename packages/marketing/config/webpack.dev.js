const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common');

const devConfig = {
    mode:"development",
    devServer:{
        port:8081,
        historyApiFallback:{
            index:"index.html"
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"marketing",
            filename:"removeEntry.js",
            exposes:{
                "./MarketingApp":"./src/bootstrap"
            },
            shared:packageJson.dependencies,
        }),
       
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig,devConfig) 