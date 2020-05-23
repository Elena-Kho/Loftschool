import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutComp from './components/about.vue'
import portfolioComp from './components/portfolio.vue'
import reviewsComp from './components/reviews.vue'

const routes = [
  {
    path: '/admin',
    component: aboutComp
  },
  {
    path: '/admin/portfolio',
    component: portfolioComp
  },
  {
    path: '/admin/reviews',
    component: reviewsComp
  }
];

export default new VueRouter({routes, mode: 'history'});
