module.exports = {
  configureWebpack: {
    performance: { hints: false },
  },
  devServer: {
    hot: false,
    inline: false,
    disableHostCheck: true,
    proxy: { 
      '/users/*': { target: 'http://0.0.0.0:8081' },
      '/users': { target: 'http://0.0.0.0:8081' }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  pwa: {
    themeColor: "#3e60af",
    workboxOptions: {
      offlineGoogleAnalytics: true,
      runtimeCaching: [
      {
        urlPattern: /.*/,
        handler: 'networkFirst',
        options: {
          fetchOptions: {
            credentials: 'same-origin'
          }
        }
      }]
    }
  },
  runtimeCompiler: true,
}