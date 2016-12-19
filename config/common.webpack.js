const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, 
                exclude: /node_modules/,
                loader: 'ts'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'css-loader'
            },
            {
                test: /\.scss$/, 
                loaders: [ 'style', 'css', 'sass' ]
            },
            { 
                test: /bootstrap\/dist\/js\/umd\//, 
                loader: 'imports?jQuery=jquery' 
            },
            { 
                test: /\.(woff2?|ttf|eot|svg)$/, 
                loader: 'url?limit=10000' 
            }
        ]
    },
    resolve: {
         extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    plugins: [
        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "window.Tether": "tether"
        })
    ]
};


module.exports = config;