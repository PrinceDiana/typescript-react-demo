const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/templates/index.html"
        })
    ],
    output: {
        path: __dirname + "/public",
        filename: "build/[name].[contenthash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
    }
};
