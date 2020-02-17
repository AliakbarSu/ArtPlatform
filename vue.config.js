// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/layout.scss";`
      }
    }
  }
};
