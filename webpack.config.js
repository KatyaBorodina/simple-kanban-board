const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'inline-source-map',
    context: __dirname + '/app/js/',
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'app/js'),
            css: path.resolve(__dirname, 'app/css')
        }
    },
    output: {
        path: __dirname + '/app/',
        filename: 'main.bundle.js'
    },
    devServer: {
        port: 3000,
        publicPath: '/',
        contentBase: path.join(__dirname, 'app')
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: true
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'file-loader?name=[name].[ext]&outputPath=./img/'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader')
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'main.bundle.css' })
    ]
};
