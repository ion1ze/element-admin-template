const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer:{
    port: 3000,
    proxy:{
      '/api':{
        target:'http://localhost:8080/api',
        ws:false,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
});
