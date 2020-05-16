import Vue from 'vue';

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


new Vue({
  el: '#slider-component',
  template: '#portfolio-container',
  components: {display, num, info},
});
