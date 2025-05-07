process.env.VUE_APP_VERSION = require("./package.json").version;

//const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  //  configureWebpack: {
  //    plugins: [new VuetifyLoaderPlugin()]
  //  }
  // ...
  //  publicPath: "/app2/",
  //  outputDir: "dist/app2"
  devServer: {
    port: 8080,
    https: true
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      // Or, for multiple preload files:
      preload: { preload: "src/preload.js" }
    }
  }
};
