/**
 * Created by inerc on 02.05.17.
 */
var ExctractTextPlugin = require('extract-text-webpack-plugin');

import path from 'path'
import webpack from 'webpack';
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
export default {
    devtool: 'cheap-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include:[
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: [ 'react-hot', 'babel' ]
            },

            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.json$/,
                exclude: '/node_modules',
                loader: 'json-loader'
            },

            {
                test:  /\.(png|jpeg|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loaders: ['file-loader']
            },

        ],

    },
    resolve: {
        extentions: [ '', '.js' ]
    }
}