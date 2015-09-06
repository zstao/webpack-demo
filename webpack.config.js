var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/js/index.js')
    ],
    //entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/js/main.js')],
    output: {
        path:  path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: "react-hot!babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};
