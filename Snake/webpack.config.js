const path = require("path");

module.exports = {
    entry: "./src/main.ts",

    devServer: {
        contentBase: path.join(__dirname, "./"),
        compress: true,
        host: "localhost",
        port: 3000,
        historyApiFallback: true, 
    },
    output: {
        filename: "./bundle.js",
    },
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    }
}