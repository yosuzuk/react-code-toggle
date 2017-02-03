const webpack = require('webpack');
const path = require('path');

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

const config = {
    entry: './src/components/CodeToggle.js',
    output: {
        path: './dist',
        filename: 'react-code-toggle.js',
        library: 'react-code-toggle',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: [
        'react',
        'jsx-to-string',
        'react-dom/server',
        'pretty',
        'react-codemirror',
        'codemirror/mode/jsx/jsx',
        'codemirror/mode/htmlmixed/htmlmixed'
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};

module.exports = config;
