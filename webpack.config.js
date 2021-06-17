const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry:"./application/index.js",
    module:{
        rules:[
            {test:/\.css$/, use:["style-loader","css-loader"]},
            {test:/\.js$/, use:"babel-loader"}
        ]
    },
    mode:"development",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    plugins:[
        new HtmlWebpack({
            template:"./application/index.html"
        })
    ]
}