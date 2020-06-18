import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import requests from './requests';


new Vue({
  el: "#app-root",
      router,
      store,
      requests,
  render: h => h(App)
});
