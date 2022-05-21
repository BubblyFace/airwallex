module.exports = require("./webpack.common")({
    mode: "development",
    plugins: [],
    stats: "errors-only", //只在发生错误或有新的编译时输出
    module: {
        rules: [{
            test: /\.css$/,
            loaders: [
                'style?sourceMap',
                'css?modues&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            ]
        }],
    }
});