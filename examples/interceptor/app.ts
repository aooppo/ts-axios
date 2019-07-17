import axios from '../../src/index'
axios.interceptors.request.use(config => {
  config.headers.test += '1'
  return config
})

axios.interceptors.request.use(config => {
  config.headers.test += '2'
  return config
})

axios.interceptors.request.use(config => {
  config.headers.test += '3'
  return config
})

axios.interceptors.response.use(resp => {
  resp.data += '1'
  return resp
})


let idx = axios.interceptors.response.use(resp => {
  resp.data += '2'
  return resp
})


axios.interceptors.response.use(resp => {
  resp.data += '3'
  debugger
  return resp
})

axios.interceptors.response.eject(idx)

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then(res => {
  console.log(res.data)
})

// axios({
//     method: 'get',
//     url: '/extend/user',
//     params: {
//       a: 1,
//       b: 2
//     }
// }).then(res => console.log(res)).catch(e => console.log(e))

// axios('/simple/get', {
//   method: 'get',
//   params: {
//     a: 1,
//     b: 2
//   }
// }).then(res => console.log(res)).catch(e => console.log(e))
  
// axios.get('/simple/get').then(res => console.log(res)).catch(e => console.log(e))
// axios.post('/base/post', {a:33, cc: 777}).then(res => console.log(res))
// axios({
//     url:'/base/post',
//     method: 'POST',
//     data: {
//         qq:1111,
//         hi:'welcome'
//     }
// }).then(res => console.log(res))
