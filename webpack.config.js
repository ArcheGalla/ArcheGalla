const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const plugins = [
    new webpack.DefinePlugin({
        NODE_ENV: process.env.NODE_ENV
    }),

    new webpack.ProvidePlugin({
        m: 'mithril',
    }),

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
    }),
];

if (process.env.NODE_ENV !== 'development') {
    plugins.push(new UglifyJsPlugin({
        sourceMap: true,
    }));
}

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
        rules: [
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[name].[ext]'}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(js|mjs)$/,
                exclude: /(node_modules(?!\/rxjs))/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        modules: ["node_modules", path.join(__dirname, "app", "components")],
        extensions: [".js", ".json", ".css"]
    },

    devtool: "source-map",
    context: __dirname,
    target: "web",
    externals: [],
    stats: "errors-only",
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true
    },

    plugins,
};