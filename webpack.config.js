'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractSASS = new ExtractTextPlugin('styles/bundle.css');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const pkg = require('./package.json');

const appPath = Path.join (__dirname, 'src');
const wwwPath = Path.join (__dirname, 'dist');
 

// 
// __________________________________ BASISKONFIGURATION __________________________________ 
//
//
var webpackConfig = {

    entry: [
        './src' // einstiegspunkt
    ],
    output: {
        path: wwwPath,
        filename: 'nw_socialfeed.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {  presets: ['es2015', 'stage-0'] }
            }, {
                test: /\.json$/,
                loader: 'json',
                exclude: [/manifest.json$/]
            },{ 
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.svg$/,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]_[hash]',
                    prefixize: true
                })
            }]
    },
    postcss: function () {
        return [
            require('autoprefixer'),
            require('postcss-fixes'),
            require('postcss-flexibility')
        ];
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash : true,
            showErrors : true,
            inject : 'body'
        })
    ],
    devServer : {
        contentBase: './dist',
        hot: true,
        port: 8082,
        inline: true,
        progress: true
    }
};

console.log("+++ NODE ENV SET TO:" + process.env.NODE_ENV);

// 
// __________________________________ DEVELOPMENT __________________________________ 
//
//

if(process.env.NODE_ENV.indexOf('development') > -1 ) {

        console.log("+++ USING DEFAULT CONFIG +++" + process.env.NODE_ENV );

        webpackConfig.devtool = 'cheap-eval-source-map';
        webpackConfig.module.loaders.push({
            test: /\.scss$/i,
            loader: 'style!css!postcss!sass-loader?includePaths[]=' + Path.resolve(__dirname, './src/assets/styles'),
            exclude: ['/node_modules/']
        });
        webpackConfig.plugins.push(
            new DashboardPlugin()
        );
        webpackConfig.module.loaders.push( { 
            test: /.(png|jpg|gif|woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/,
            loader: 'url?limit=10000&encoding=base64'
        });

} else {
    // 
    // __________________________________ PRODUCTION __________________________________ 
    //
    //

    console.log("+++ USING PRODUCTION CONFIG +++" + process.env.NODE_ENV );

    webpackConfig.plugins.push(new Webpack.optimize.DedupePlugin());
    webpackConfig.plugins.push(ExtractSASS);

    webpackConfig.module.loaders.push({
        test   : /\.scss$/,
        loader : ExtractSASS.extract('style-loader', 'css!postcss!sass-loader?includePaths[]=' + Path.resolve(__dirname, './src/assets/styles')),
        exclude: ['/node_modules/']
    });
    webpackConfig.module.loaders.push( { 
        test: /.(png|jpg|gif|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'file?limit=3000&encoding=bas64'
    });
    webpackConfig.module.loaders.push( { 
        test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/,
        loader: 'file?name=fonts/[hash].[ext]&encoding=base64'
    });
}

module.exports = webpackConfig;
