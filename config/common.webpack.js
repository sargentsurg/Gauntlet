const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(ts|tsx)$/, loader: 'ts'}
        ]
    },
    resolve: {
         extensions: ["", ".js", ".ts"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};


module.exports = config;