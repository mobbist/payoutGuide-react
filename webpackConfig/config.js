var path = require("path");

//导出开发模式和生产模式的一些文件目录配置等等
module.exports = {
    build: {
        //是否是生产环境
        env: '"production"',
        //是否开启SourceMap
        productionSourceMap: true,
        //资源入口
        assetsRoot: path.resolve(__dirname, '../dist'),
        //首页打包的位置
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsSubDirectory: "",
        productionGzip: false,
        assetsPublicPath: "/"
    },
    dev: {
        assetsPublicPath: "/",
        assetsSubDirectory: "",
        autoOpenBrowser: true,
        port: 3001
    }
}