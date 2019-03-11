module.exports = {
  devServer: {
    port: 8055,
    proxy: {
      "/api": {
        target: "http://wfserver.gree.com",
        ws: true,
        changeOrigin: true
      }
    } // 配置多个代理
  }
};
