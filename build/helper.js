const helper = require('components-helper')
const { name, version } = require('../package.json')
const tagVer = process.env.TAG_VERSION
const _version = tagVer ? tagVer.startsWith('v') ? tagVer.slice(1) : tagVer : version

helper({
  name,
  version: _version,
  entry: 'helper/date-week-range.md',
  outDir: 'dist',
  reComponentName,
  reDocUrl,
  reAttribute,
  props: 'Attributes',
  propsName: 'Attribute',
  propsOptions: 'Accepted Values',
  eventsName: 'Event Name',
  tableRegExp: '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
})

function reComponentName(title) {
  return title.replace(/\B([A-Z])/g, '-$1').replace(/[ ]+/g, '-').toLowerCase()
}

function reDocUrl(fileName, header) {
  const docs = 'https://element-plus.org/#/en-US/component/'
  const _header = header ? header.replace(/[ ]+/g, '-').toLowerCase() : undefined
  return docs + 'el-date-picker' + (_header ? '#' + _header : '')
}

function reAttribute(value, key) {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1]: value
  
  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)){
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Attribute') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '')
  } else {
    return str
  }
}