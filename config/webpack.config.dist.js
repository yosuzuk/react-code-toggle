const path = require('path');

const config = {
    mode: 'production',
    entry: './src/components/CodeToggle.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'react-code-toggle.js',
        library: 'react-code-toggle',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: [
        'react',
        'jsx-to-string',
        'pretty',
        'react-codemirror2',
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
    }
};

module.exports = config;
