import axios from '../../src/index'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    b: 2
  }
})

const date = new Date()
axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'test']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    bar: null
  }
})

axios({
  method: 'get',
  url: '/base/get?xx=qq',
  params: {
    a: 1,
    bar: null
  }
})

axios({
  method: 'get',
  url: '/base/get?xx=qq',
  params: {
    a: 1,
    bar: '@:$ '
  }
})

axios({
  method: 'get',
  url: '/base/get#xx=qq',
  params: {
    hash: 1,
  }
})