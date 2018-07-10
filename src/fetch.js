// import store from 'store'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseUrl = 'api'
Vue.http.options.root = baseUrl
// Vue.http.headers.common['SSO-TICKET'] = store.get('SSO-TICKET')

export function get (path) {
  return Vue.http.get(path).then(response => {
      return response.json()
    })
}

export function post (path, data) {
  return Vue.http.post(path, data).then(response => {
      return response.json()
    })
}

export function put (path, data) {
  return Vue.http.put(path, data).then(response => {
      return response.json()
    })
}

export function remove (path) {
  return Vue.http.delete(path).then(response => {
      return response.json()
    })
}
