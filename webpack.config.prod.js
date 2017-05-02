var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'client/build'),
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('styles.css')
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
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "sass-loader"])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", ["css-loader"])
            },
            {
                test: /\.json$/,
                exclude: '/node_modules',
                loader: 'json-loader'
            },

            {
                test:  /\.(png|jpeg|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loaders: ['url']
            },

        ],

    },
    resolve: {
        extentions: [ '', '.js' ]
    }
};
