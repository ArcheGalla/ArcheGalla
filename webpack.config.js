const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const production = 'production';
const development = 'development';
const NODE_ENV = process.env.NODE_ENV;

const plugins = [
    new webpack.DefinePlugin({
        NODE_ENV: NODE_ENV === development ? "'development'" : "'production'"
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

const rules = [
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
        test: /\.(js|mjs)$/,
        exclude: /(node_modules(?!\/rxjs))/,
        loader: 'babel-loader'
    }
];


if (NODE_ENV === production) {
    plugins.push(new UglifyJsPlugin({
        sourceMap: true,
    }));

    plugins.push(
        new ExtractTextPlugin({
            filename: "[name].[hash].css",
            allChunks: true,
        })
    );


    rules.push({
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    });
}

if (NODE_ENV === development) {
    rules.push({
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            }
        ]
    });
}


module.exports = {
    entry: {
        app: './src/app/index.bootstrap.mjs',
        vendor: './src/app/index.vendor.mjs'
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/",
    },

    module: {rules},

    plugins,

    resolve: {
        modules: ["node_modules", path.join(__dirname, "src", "app", "components")],
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
};