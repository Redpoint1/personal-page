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
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
  }
};
