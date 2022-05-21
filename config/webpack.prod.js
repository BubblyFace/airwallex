const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin"); //打包前清空build目录文件
const ProgressBarPlugin = require("progress-bar-webpack-plugin"); // 打包进度条美化
const chalk = require("chalk");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = require("./webpack.common")({
    mode: "production",
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin({
            format: `${chalk.green.bold("build[:bar]")} ` +
                chalk.green.bold(":percent") +
                " (:elapsed seconds)",
            clear: false,
            width: 60,
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ],
    stats: "normal", //标准输出
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin({
                notExtractLoader: 'style-loader',
                loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base4:5]!resolve-url!postcss'
            })
        }],
    }
});