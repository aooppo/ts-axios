import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../utils/headers'
import { createError } from '../utils/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data, url, method = 'get', headers, responseType, timeout } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }
    request.ontimeout = function() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }

    request.open(method.toUpperCase(), url!, true)
    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        //readyState always equal 4, once ajax received result
        return
      }
      if (request.status === 0) {
        //net work error
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = function() {
      reject(createError('Network Error', config, null, request))
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLocaleLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
