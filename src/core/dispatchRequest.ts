import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../utils/url'
import { transformRequest, transformResponse } from '../utils/data'
import { processHeaders } from '../utils/headers'
export default function (config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}


