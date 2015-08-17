var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry:  [
        './src/js/index.js'
    ],
    output: {
        path:  path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    //plugins: [
    //    new webpack.HotModuleReplacementPlugin(),
    //    new webpack.NoErrorsPlugin()
    //],
    module: {
        loaders: [
            {test: /\.js$/, loader: "react-hot-loader!babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};
