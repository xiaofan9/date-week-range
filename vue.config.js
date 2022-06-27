module.exports = {
  pages: {
    index: {
      entry: "example/src/main.js",
      template: "example/public/index.html",
      filename: "index.html"
    }
  },
  transpileDependencies: ["element-plus", "@element-plus"]
};
