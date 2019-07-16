import axios from '../../src/index'
interface Resp<T=any> {
    code: number
    result: T
    message: string
}

interface User {
  name: string
  age: number
}
function getUser<T>() {
    return axios<Resp<T>>('/extend/user').then(res => res.data).catch(ex => console.error(ex))
}
async function test() {
  const u = await getUser<User>()
  if(u) {
    console.log(u.result)
  }
  
}

test()

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
