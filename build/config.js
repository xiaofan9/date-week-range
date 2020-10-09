const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
let externals = {};

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  packages: path.resolve(__dirname, '../packages'),
  'date-week-range': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules/;

exports.output = {
  path: path.resolve(process.cwd(), 'packages/date-week-range', './dist')
}

exports.jsinclude = ['element-ui/src/utils', 'element-ui/src/mixins'].map(dep => {
  if (typeof dep === 'string') {
    const depPath = path.join('node_modules', dep, '/')
    return depPath.replace(/\\/g, '\\\\')
  } else if (dep instanceof RegExp) {
    return dep.source
  }
})

console.log(exports.jsinclude);