const path = require('path')
const HtmlWebpackPlugin  = require("html-webpack-plugin")

module.exports = {
    entry:'./src/main.ts',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}