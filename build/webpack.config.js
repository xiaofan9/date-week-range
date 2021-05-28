const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const pkg = require("../package.json");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

let externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
]
const plugins = [
  new VueLoaderPlugin(),
  new ProgressBarPlugin(),
  // new BundleAnalyzerPlugin(),
  new webpack.NormalModuleReplacementPlugin(
    // eslint-disable-next-line no-useless-escape
    /element-plus[/\\]lib[/\\]locale[/\\]lang[/\\]en/,
    'zh-cn.js',
  ),
]

const entry = path.resolve(__dirname, '../src/index.js')

const config = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: pkg.name + '.min.js',
    libraryTarget: 'umd',
    library: 'DateWeekRange',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'],
  },
  externals,
  plugins,
}

module.exports = config
