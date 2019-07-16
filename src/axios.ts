import { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from './types'
import Axios from './core/axios'
import { extend } from './utils/util';


function createInstance():AxiosInstance {
  const ctx = new Axios()
  const intstance = Axios.prototype.request.bind(ctx)
  extend(intstance, ctx)
  return <AxiosInstance> intstance
}

const axios = createInstance()


export default axios
