//加载webpack-build配置
var path = require('path')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var env = config.build.env

const assetsPath = (_path) => {
    //兼容各个平台,把你的地址和路径拼接起来
    //console.log(config.build.assetsSubDirectory, _path);
    return path.posix.join("", _path)
}

var webpackConfig = merge(baseWebpackConfig, {
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    plugins: [
        //配置全局环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: env
            }
        }),
        //JS文件压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        //将JS中引入的css分离的插件
        new ExtractTextPlugin({
            filename: assetsPath('css/[name].[contenthash].css')
        }),
        //压缩提取出的CSS, 并解决ExtractTextPlugin分离出的js重复的问题(多个文件引入同一css文件)
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        //生成html的插件, 引入css文件和js文件
        new HtmlWebpackPlugin({
            filename: config.build.index,//生成的html的文件名
            template: 'index.html',//依据的模板
            inject: true,//注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
            minify: {//压缩配置
                removeComments: true, //删除html中的注释代码
                collapseWhitespace: true, //删除html中的空白符
                removeAttributeQuotes: true //删除html元素中属性的引号
            },
            chunksSortMode: 'dependency' //按dependency的顺序引入
        }),
        new webpack.HashedModuleIdsPlugin(),

        //分离公共js到vendor中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', //文件名
            minChunks: function (module, count) { // 声明公共的模块来自node_modules文件夹
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        //上面虽然已经分离了第三方库,每次修改编译都会改变vendor的hash值，导致浏览器缓存失效。
        //原因是vendor包含了webpack在打包过程中会产生一些运行时代码，运行时代码中实际上保存了打包后的文件名。
        //当修改业务代码时,业务代码的js文件的hash值必然会改变。一旦改变必然会导致vendor变化。vendor变化会导致其hash值变化。
        //下面主要是将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        //复制静态资源, 将static文件内的内容复制到指定文件夹
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: config.build.assetsSubDirectory,
        //         ignore: ['.*']
        //     }
        // ])
    ]
})

//引入压缩文件的组件,该插件会对生成的文件进行压缩，生成一个.gz文件
if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',//目标文件名
            algorithm: 'gzip',//使用gzip压缩
            test: new RegExp(//满足正则表达式的文件会被压缩
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,//资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8//最小压缩比达到0.8时才会被压缩
        })
    )
}

module.exports = webpackConfig