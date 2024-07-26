const http = require('node:http');
const { createProxyMiddleware } = require('http-proxy-middleware')

/**
 * Configure proxy middleware
 */
const jsonPlaceholderProxy = createProxyMiddleware({
    target: 'https://qyapi.weixin.qq.com',
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    logger: console,
})

/**
 * Add the proxy to http-server
 */
const server = http.createServer(jsonPlaceholderProxy);

// 需要把端口换成自己可以使用的
server.listen(22470)
console.log('[DEMO] Server: listening on port 3000');

process.on('SIGINT', () => server.close());
process.on('SIGTERM', () => server.close());
