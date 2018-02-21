const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app/index.bootstrap.mjs',
        vendor: './src/app/index.vendor.mjs'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },

    module: {
        rules: [{
            test: /\.ico$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        }]
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".css"]
    },

    devtool: "source-map",
    context: __dirname,
    target: "web",
    externals: [],
    stats: "errors-only",
    devServer: {
        port: 9000,
        // proxy: { '/api': 'http://localhost:3000' },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Arche Galla',
            filename: 'index.html'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
            module: ['bundle']
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        })
    ]
};