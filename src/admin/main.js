import Vue from 'vue'
import axios from 'axios'
import store from './store'
import App from './App.vue'
import router from './router'
import requests from './requests'



new Vue({
  el: "#app-root",
      router,
      store,
      requests,
  render: h => h(App)
});
