# wechat-http-proxy

企业微信发送应用消息需要固定ip才可以发送，serv00 的机器ip是固定的，正好可以利用一下

获取公网ip

```bash
devil vhost list public
```

### 使用方法

下载当前项目，修改 index.js 文件中端口，所有访问企业的接口通过本服务代理访问，例如

企微获取token： https://qyapi.weixin.qq.com/cgi-bin/message/send   
修改完为： http://serv00.com:1111/cgi-bin/message/send   

`serv00.com:1111` 为可以访问你部署程序的公网访问入口

