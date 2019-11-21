'use strict'
const path = require('path')
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// const name = defaultSettings.title || 'vue Element Admin' // page title
const name = 'vue Element Admin'

module.exports = {
    // baseUrl: '/',  // Vue CLI3.3起已弃用
    publicPath:'/',
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    // resolve: {
    //     alias: {
    //       '@': resolve('src'),
    //     }
    // },
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
    configureWebpack: {
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
}