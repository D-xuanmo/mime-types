import mimeTypes from './types.json'

export default function (filename = '') {
  try {
    let type = ''
    const { suffix } = /\.?(?<suffix>[\w]+)$/.exec(filename).groups
    const length = Object.keys(mimeTypes).length
    for (const [_key, _value] of Object.entries(mimeTypes)) {
      const keys = _key.split('|')
      if (keys.includes(suffix.toLocaleLowerCase())) {
        type = _value
        break
      }
    }
    return type
  } catch (err) {
    return null
  }
}
