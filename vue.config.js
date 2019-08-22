module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-element-nocode-admin/" : "/",
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
