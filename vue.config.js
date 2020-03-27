const package = require("./package.json");

process.env.VUE_APP_VERSION = package.version;
process.env.VUE_APP_AUTHOR = package.author;
process.env.VUE_APP_BUG_REPORT = package.bugs.url;
process.env.VUE_APP_COPYRIGHT = new Date().getFullYear();

module.exports = {
  css: {
    sourceMap: true
  },
  assetsDir: "static",
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .end();
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
  }
};
