import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);

import aboutComp from '../components/about/about.vue';
import portfolioComp from '../components/portfolio/portfolio.vue';
import reviewsComp from '../components/reviews/reviews.vue';
import loginComp from '../components/login/login.vue';


const routes = [
  {
    path: '/',
    component: aboutComp
  },
  {
    path: '/portfolio',
    component: portfolioComp
  },
  {
    path: '/reviews',
    component: reviewsComp
  },
  {
    path: '/login',
    component: loginComp,
    meta: {
      public: true
    }
  },
];


export default routes;
