import Vue from 'vue';

const display = {
  template: '#portfolio-display',
  components: {
    thumbs,
    btns
  },
};

const info = {
  template: '#portfolio-info',
  components: {
    tags
  },
};

const num = {
  template: '#portfolio-num',
};

const btns = {
  template: '#portfolio-btns',
};

const thumbs = {
  template: '#portfolio-thumbs',
};

const tags = {
  template: '#portfolio-tags',
};



new Vue({
  el: '#slider-component',
  template: '#portfolio-container',
  components: {display, num, info},
});
