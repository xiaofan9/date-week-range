module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      modules: false
    }],
    '@vue/babel-preset-jsx'
  ],
  plugins: ["@babel/plugin-transform-runtime"]
}
