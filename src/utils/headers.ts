import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (
      name !== normalizedName &&
      normalizedName.toLocaleUpperCase() === name.toLocaleUpperCase()
    ) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let obj = Object.create(null)
  if (!headers) {
    return obj
  }
  headers.split('\r\n').forEach(l => {
    let [k, v] = l.split(':')
    k = k.trim().toLowerCase()
    if (!k) {
      return
    }
    if (v) {
      v = v.trim()
    }
    obj[k] = v
  })
  return obj
}
