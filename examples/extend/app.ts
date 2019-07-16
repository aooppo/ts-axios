import axios from '../../src/index'
axios({
    method: 'get',
    url: '/simple/get',
    params: {
      a: 1,
      b: 2
    }
}).then(res => console.log(res)).catch(e => console.log(e))
  
axios.get('/simple/get').then(res => console.log(res)).catch(e => console.log(e))
// axios.post('/base/post', {a:33, cc: 777}).then(res => console.log(res))
// axios({
//     url:'/base/post',
//     method: 'POST',
//     data: {
//         qq:1111,
//         hi:'welcome'
//     }
// }).then(res => console.log(res))
