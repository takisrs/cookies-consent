const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "cookies-consent": "./src/index.js",
        "cookies-consent.min": "./src/index.js",
    },
    output: {
        filename: '[name].js',
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
                                    //useBuiltIns: "usage",
                                    //corejs: 3
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
                        options: {
                            postcssOptions: {
                                plugins: function(){
                                    return [require("autoprefixer")];
                                }
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                include: /\.min\.css$/
            }), 
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                include: /\.min\.js$/
            })
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