import { isDate, isPlainObject } from './util'
import { types } from 'util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, param?: any): string {
  if (!param) {
    return url
  }
  const tuples: string[] = []
  Object.keys(param).forEach(key => {
    const val = param[key]
    if (val === null || typeof val === undefined) {
      return
    }
    let vals = []
    if (Array.isArray(val)) {
      vals = val
      key += '[]'
    } else {
      vals = [val]
    }
    vals.forEach(v => {
      if (isDate(v)) {
        v = v.toISOString()
      } else if (isPlainObject(v)) {
        v = JSON.stringify(v)
      }
      tuples.push(`${encode(key)}=${encode(v)}`)
    })
  })
  let serializedParams = tuples.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex > -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') > -1 ? '&' : '?') + serializedParams
  }
  return url
}
