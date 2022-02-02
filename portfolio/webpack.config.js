const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: "javascript/auto",
                loader: "file-loader",
                options: {
                    publicPath: "../",
                    name: "[path][name].[ext]",
                    context: path.resolve(__dirname, "src/assets"),
                    emitFile: false,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),

        //new CopyPlugin({
        //  patterns: [
        //{ from: "./src/assets/images", to: "images" },
        /*{ from: "./src/assets/fonts", to: "fonts" },
        { from: "./src/assets/vendor", to: "js" },*/
        //]
        //})
    ],
    stats: {
        children: true
    }
};