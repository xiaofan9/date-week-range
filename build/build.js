/* eslint-disable */
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const chalk = require('chalk')
const path = require('path')
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const { default: babel } = require('@rollup/plugin-babel')
const cjs = require('@rollup/plugin-commonjs')
const pkg = require('../package.json')

const deps = Object.keys(pkg.dependencies)
const foldPath = path.resolve(__dirname, `../packages/${pkg.name}`)
const input = path.resolve(foldPath, 'src/index.js')
const outputConfig = {
  'esm': {
    format: 'es',
    file: path.resolve(foldPath, `dist/${pkg.name}.esm.js`),
  },
  'umd': {
    format: 'umd',
    file: path.resolve(foldPath, `dist/${pkg.name}.js`),
    name: pkg.name,
    globals: {
      'vue': 'Vue'
    }
  }
}

const runBuild = async () => {
  const outputKeyList = Object.keys(outputConfig);
  let index = 0;

  build(outputKeyList[index])

  async function build(name) {
    if (!name) return
    const umdPlugins = name === 'umd' ? [
      babel({
        babelHelpers: 'runtime',
      })
    ] : []
    const esmTerser = name === 'esm' ? {
      compress: {
        ecma: 2015,
        pure_getters: true
      }
    } : {}
    const outOptions = outputConfig[name]
    const inputOptions = {
      input,
      plugins: [
        nodeResolve({
          extensions: ['.mjs', '.js', '.json', '.node', '.vue'],
        }),
        vue({
          target: 'browser',
          css: false,
        }),
        json(),
        cjs({
          // 开启混合模式转换
          transformMixedEsModules: true,
          sourceMap: false
        }),
        terser(esmTerser),
        ...umdPlugins
      ],
      external(id) {
        return name === 'umd' ? /^vue$/.test(id) : (/^vue$/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id)))
      },
    }

    console.log(chalk.blue(input + ' → ' + outOptions.file + '...'))
    console.time(chalk.green('create ' + outOptions.file + ' done'))

    const bundle = await rollup.rollup(inputOptions)
    const { output } = await bundle.generate(outOptions)

    console.timeEnd(chalk.green('create ' + outOptions.file + ' done'))

    await bundle.write(outOptions)
    index++
    if (index < outputKeyList.length) {
      await build(outputKeyList[index])
    }
  }
}

runBuild()
