import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import VueRouter from 'vue-router';
import{routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:'history'
});

const token = sessionStorage.getItem('token');

window.axios = axios;
axios.defaults.baseURL = 'http://192.168.99.100:8080/api/v1'
axios.defaults.headers.common = {
  'Authorization': 'Bearer '+token,
  'Content-Type': 'application/json; charset=UTF-8'
}



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
