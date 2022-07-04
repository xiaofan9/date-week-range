/* eslint-disable */
const vue = require("rollup-plugin-vue");
const rollup = require("rollup");
const chalk = require("chalk");
const path = require("path");
const json = require("@rollup/plugin-json");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");
const { default: babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");
const cjs = require("@rollup/plugin-commonjs");
const pkg = require("../package.json");
const { DEFAULT_EXTENSIONS } = require("@babel/core");
const replace = require("@rollup/plugin-replace");

const deps = ["vue", ...Object.keys(Object.assign({}, pkg.dependencies))];
const foldPath = path.resolve(__dirname, `..`);
const input = path.resolve(foldPath, "src/index.js");
const outputConfig = {
  esm: {
    format: "esm",
    file: path.resolve(foldPath, `dist/index.esm.js`)
  },
  // umd: {
  //   format: "umd",
  //   file: path.resolve(foldPath, `dist/${pkg.name}.min.js`),
  //   name: "DateWeekRange",
  //   globals: {
  //     vue: "Vue"
  //   },
  //   exports: "named"
  // }
};
const argument = process.argv.splice(2);
const isDebug = argument.includes('debug');
const commonExtensions = [".ts", ".tsx", ".vue"];

const runBuild = async () => {
  const outputKeyList = Object.keys(outputConfig);
  let index = 0;

  build(outputKeyList[index]);

  async function build(name) {
    if (!name) return;
    const extTerserOpt =
      name === "esm"
        ? {
            compress: {
              pure_getters: true
            },
            ecma: 2015
          }
        : {};

    const extPlugins = [
      ...(isDebug ? [] : [terser(
        Object.assign(
          {
            mangle: false,
            toplevel: true,
            safari10: true,
            format: {
              comments: false,
            },
          },
          extTerserOpt
        )
      )]),
      ...(name === "esm" ? [] : [
        cjs({
          // 开启混合模式转换
          transformMixedEsModules: true,
          sourceMap: false
        }),
      ]),
    ];
    const outOptions = Object.assign(
      outputConfig[name],
      {
        sourcemap: false
      }
    );
    const inputOptions = {
      input,
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify("production"),
          preventAssignment: true
        }),
        nodeResolve({
          extensions: [".mjs", ".js", ".json", ".node", ...commonExtensions]
        }),
        json(),
        vue({
          target: 'browser',
          css: false,
          exposeFilename: false,
        }),
        ...extPlugins,
        babel({
          babelHelpers: "runtime",
          extensions: [...DEFAULT_EXTENSIONS, ...commonExtensions]
        })
      ],
      external(id) {
        return name === "umd"
          ? /^vue$/.test(id)
          : deps.some(k => {
            return new RegExp("^" + k).test(id);
          });
      }
    };

    console.log(chalk.blue(input + " → " + outOptions.file + "..."));

    try {
      const str = chalk.green("create " + outOptions.file + " done");
      console.time(str);
      const bundle = await rollup.rollup(inputOptions);
      await bundle.generate(outOptions);
      await bundle.write(outOptions);
      index++;

      console.timeEnd(str);
      if (index < outputKeyList.length) {
        await build(outputKeyList[index]);
      }
    } catch (e) {
      console.error(e);
      process.exit;
    }
  }
};

runBuild();
