const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = function (options) {
    return {
        mode: options.mode,
        entry: paths.appSrc,
        output: {
            path: paths.appBuild,
            publicPath: "/",
        },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        cache: {
            // 使用持久化缓存
            type: "filesystem", //memory:使用内容缓存 filesystem：使用文件缓存
        },
        devtool: false,
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                      ],
                }
            ],
        },
        devServer: {},
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            ...options.plugins,
        ],
        stats: options.stats, // 打包日志发生错误和新的编译时输出
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
    };
};