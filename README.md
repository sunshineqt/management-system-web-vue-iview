
# vue-demo
 > 从0到1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue CLI 3 创建该项目:

~~~
npm uninstall -g vue-cli
npm install -g @vue/cli
vue create vue-demo
cd vue-demo
npm run serve
~~~
>+ 项目创建之前的配置项可以选择手动配置，选择Babel/Router/Vuex/CSS Pre-processors/Linter/Formatter，这样后期不用自己再去引Router/Vuex了
>+ 全局目录下手动创建vue.config.js
>+ 参考：https://www.cnblogs.com/wisewrong/p/9740173.html

~~~
module.exports = {
  baseUrl: '/',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
}
~~~~

## ui框架
> iView

## 目录
> 在原有目录的基础上全局下增加vue.config.js用于增加webpack配置相关
> 在src目录下增加api-用于请求接口统一管理，directives-自定义指令封装，filters-过滤器，mock-数据模拟，router-路由管理，store-vuex管理，styles-样式管理，utils-公共工具类管理

