这是百度san 框架的一个demo，也可以当作一个脚手架项目。其最大特点就是可以兼容到IE6。整个项目选用了webpack 4 来搭建，还是比较时髦的。

该demo 是按照大型项目的目标来搭建的。可以使用于大型的政府类项目。其技术实现包括：
- webpack 4
- san-router 路由
- san-store 状态管理
- san 单文件组件
- 路由异步加载
- 支持ES6语法

# 启动方式
```
 npm i
 npm start
```

# 命令说明
- `npm start`  //启动开发环境，IE8- 下测试无效。该模式下便于开发，支持自动编译和热加载
- `npm run start-ie`  //IE8 开发模式，一般用于IE8 下的调试, 不支持自动编译和热加载
- `npm run build`  //打包生产环境

由于`webpack-dev-server` 不支持IE8-，所以`start-ie`采用koa启动服务。启动后支持自动编译，但热加载自动刷新页面。简易项目开发时使用`npm start`启动，功能开发完成后用`npm run start-ie`启动在IE8-下进行调试。

可在`config/config.js`中设置端口和后端数据代理地址。