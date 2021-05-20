/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "example/src/main.js",
      template: "example/public/index.html",
      filename: "index.html"
    }
  },
  transpileDependencies: ["element-plus", "@element-plus"],
  configureWebpack: {
    resolve: {
      alias: {
        "@element-plus": path.resolve(__dirname, "node_modules", "element-plus", "packages")
      }
    }
  }
};
