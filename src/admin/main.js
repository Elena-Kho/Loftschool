import Vue from 'vue';
import axios from 'axios';
import {store} from './store';
import App from './App.vue';
import router from './router';



new Vue({
  el: "#app-root",
      router,
      store,
  render: h => h(App)
});
