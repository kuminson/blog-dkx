import axios from 'axios'
import url from './url'

// 通用配置
const instance = axios.create({
  // 服务器根结点
  baseURL: url.baseUrl,
  // withCredentials: true,
  timeout: 20000
})

// 拦截返回内容
instance.interceptors.response.use((response) => {
  return response
}, (err) => {
  // 返回错误内容
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    return Promise.reject(err.code)
  }
  return Promise.reject(err)
})

const action = {
  commonPost: (url, data) => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    return {
      promise: new Promise((resolve, reject) => {
        instance.post(url, data, {
          cancelToken:source.token
        }).then(res => {
          if (res.data.code === 200) {
            resolve(res.data.data)
          }else {
            reject(res.data)
          }
        }).catch(error =>{
          reject(error)
        })
      }),
      CancelToken: source
    }
  },
  commonGet: (url, data) => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    return {
      promise: new Promise((resolve, reject) => {
        instance.get(url, {
          params:data,
          cancelToken:source.token
        }).then(res => {
          if (res.data.code === 200) {
            resolve(res.data.data)
          }else {
            reject(res.data)
          }
        }).catch(error =>{
          reject(error)
        })
      }),
      CancelToken: source
    }
  }
}

export default action
