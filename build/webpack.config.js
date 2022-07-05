const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const entry = [path.resolve(__dirname, "..", "src")];
const plugins = [
  new ProgressBarPlugin(),
  new VueLoaderPlugin(),
  new webpack.NormalModuleReplacementPlugin(
    // eslint-disable-next-line no-useless-escape
    /element-plus[/\\]lib[/\\]locale[/\\]lang[/\\]en/,
    "zh-cn.js"
  )
];
const externals = [
  {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue"
    }
  }
];

const output = {
  path: path.resolve(__dirname, "../dist"),
  publicPath: "/",
  filename: "index.min.js",
  libraryTarget: "umd",
  library: "DateWeekRange",
  libraryExport: 'default',
  umdNamedDefine: true,
  globalObject: "typeof self !== 'undefined' ? self : this"
};

const config = {
  mode: "production",
  entry,
  output,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".vue", ".mjs", ".css"]
  },
  externals,
  plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
};

module.exports = config;
