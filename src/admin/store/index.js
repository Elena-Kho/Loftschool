import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import categories from './modules/categories';

export const store = new Vuex.Store({
  modules: {
    user,
    categories
  }
});
