import axios, {AxiosError} from '../../src/index'

axios({
  method: 'get',
  url: '/error/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log('#1', res)
}).catch((ex : AxiosError) =>  {
  console.info('err>', ex)
})

axios({
  method: 'get',
  url: '/error/get',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log('#2', res)
}).catch((ex : AxiosError)  =>  {
  console.info('err2>', ex)
})


axios({
  method: 'get',
  url: '/error/timeout',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  },
  timeout: 2000
}).then(res => {
  console.log('#3', res)
}).catch((ex : AxiosError) =>  {
  console.info('err3>', ex.config, ex.message, ex.isAxiosError)
})


// const arr = new Int32Array([10, 13]);
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 1,
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'test']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 1,
//     bar: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?xx=qq',
//   params: {
//     a: 1,
//     bar: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?xx=qq',
//   params: {
//     a: 1,
//     bar: '@:$ '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#xx=qq',
//   params: {
//     hash: 1,
//   }
// })