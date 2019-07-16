import { AxiosRequestConfig, AxiosPromise,  AxiosInstance, Method } from '../types'
import dispatchRequest from './dispatchRequest'
export default class Axios {
    request(config: AxiosRequestConfig):AxiosPromise {
        return dispatchRequest(config)
    }
    get(url:string, config?: AxiosRequestConfig):AxiosPromise {
        console.log(url, config)
        return this._requestMethodWithoutData('GET', url, config)
    }

    delete(url:string, config?: AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWithoutData('DELETE', url, config)
    }


    head(url:string, config?: AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWithoutData('HEAD', url, config)
    }


    options(url:string, config?: AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWithoutData('OPTIONS', url, config)
    }

    post(url: string, data?:any, config?:AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWitData('POST', url, data, config)
    }

    put(url: string, data?:any, config?:AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWitData('PUT', url, data, config)
    }
     
    patch(url: string, data?:any, config?:AxiosRequestConfig):AxiosPromise {
        return this._requestMethodWitData('PATCH', url, data, config)
    }

    _requestMethodWithoutData(method:Method, url: string, config?: AxiosRequestConfig):AxiosPromise {
        return this.request(Object.assign(config||{}, {
            method,
            url,
        }))
    }

    _requestMethodWitData(method:Method, url: string, data?:any, config?: AxiosRequestConfig):AxiosPromise {
        return this.request(Object.assign(config||{}, {
            method,
            url,
            data
        }))
    }
}