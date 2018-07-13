// import store from 'store'
import axios from 'axios'

axios.defaults.baseURL = 'api'
// axios.defaults.headers.common['SSO-TICKET'] = store.get('SSO-TICKET')

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做某事
    return config;
  },
  // 请求错误时做些事
  (error) => Promise.reject(error)
)

export function get (url, params) {
  return axios.get(url, {params}).then(res => res.data)
}

export function post (url, params) {
  return axios.post(url, params).then(res => res.data)
}

export function put (url, params) {
  return axios.put(url, params).then(res => res.data)
}

export function remove (url, params) {
  return axios.delete(url, {params}).then(res => res.data)
}
