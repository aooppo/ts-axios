import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 3,
    b: 4
  }
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
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