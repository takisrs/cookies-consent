const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: 'cookies-consent.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'cookiesConsent',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: './dist',
    },
    devtool: 'sourceMap',
    module: {
        rules: [            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", {
                                    useBuiltIns: "usage",
                                    corejs: 3
                                }
                            ]
                        ]                        
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        /*options: {
                            plugins: function(){
                                return [require("autoprefixer")];
                            }
                        }*/
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'cookies-consent.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            cache: false, 
            scriptLoading: 'blocking', 
            inject: 'head' 
        }),
    ],
}