import Vue from 'vue';

const reviewsSlide = {
  template: '#reviews-slide',
  data() {
    return {
      slideInfo: []
    }
  },
  props: {
    slideInfo: Object
  }
};

const reviewsSlider = {
  template: '#reviews-slider',
  components: {
    reviewsSlide
  },
  props: {
    slidesInfo: Array
  }
};

const arrowsComp = {
  template: '#reviews-arrows'
};

new Vue({
  el: '#reviews',
  template: '#reviews-main',
  components: {
    arrowsComp,
    reviewsSlider
  },
  data() {
    return {
      slidesInfo: [],
      currentSlide: [],
      slidesIndex: 0
    }
  },

  created() {
    const data = require('../data/reviews.json');
    this.slidesInfo = data;
  }
});
