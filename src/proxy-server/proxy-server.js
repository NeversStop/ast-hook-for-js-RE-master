const AnyProxy = require("../../anyproxy");

const options = {
    port: 10086,
    rule: require("./rules"),
    webInterface: {
        enable: true,
        webPort: 8002
    },
    throttle: 1000,
    forceProxyHttps: true,
    wsIntercept: false, // 不开启websocket代理
    silent: true,
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on("ready", () => { /* */ });
proxyServer.on("error", (e) => { /* */ });
proxyServer.start();