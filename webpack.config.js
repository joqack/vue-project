const path=require('path');
const htmlWP=require('html-webpack-plugin');
const clean=require('clean-webpack-plugin');
module.exports={
    //打包的入口文件
    entry:path.resolve(__dirname,'./src/js/main.js'),
    //输出
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle_[chunkhash:6].js'
    },
    plugins:[
        new htmlWP({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body',
            minify:{ // 压缩优化HTML页面
                collapseWhitespace:true, // 合并空白字符
                removeComments:true, // 移除注释
                removeAttributeQuotes:true // 移除属性上的引号
            }
        }),
        new clean(['dist']),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gifb|bmg|svg|mp3|mp4|ttf)$/,
                use:[
                {loader:'url-loader',options:{limit:10240}}  
            ]
            },
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,"./node_modules"),
                use:['babel-loader'],
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
        ]
    }
}