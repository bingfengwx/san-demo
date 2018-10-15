const path = require('path');
const proxy = require('koa2-proxy');
const config = require('./config');

const column = '../dist';

proxy.static(path.resolve(__dirname, column));

// 转发请求到指定host
let proxyConfig = config.proxy;
Object.keys(proxyConfig).forEach(function(path) {
  let targetArr = proxyConfig[path].target.split('://');
  proxy.when(path, function(ctx) {
      ctx.request.host = targetArr[1];
      ctx.request.protocol = targetArr[0];
  });
})

// 监听端口
proxy.listen(config.port);
