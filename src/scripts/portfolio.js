import Vue from 'vue';

const num = {
  template: '#portfolio-num',
};

const btns = {
  template: '#portfolio-btns',
};

const thumbs = {
  template: '#portfolio-thumbs',
  props: ['works']
};

const tags = {
  template: '#portfolio-tags',
  props: ['tags'],
};


const display = {
  template: '#portfolio-display',
  components: {
    thumbs,
    btns
  },
  props: ['currentWork', 'works'],
};

const info = {
  template: '#portfolio-info',
  components: {
    tags
  },
  props: ['currentWork'],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
  }
};


new Vue({
  el: '#slider-component',
  template: '#portfolio-container',
  components: {display, num, info},
  data() {
    return {
      works: [],
      currentIndex: 0,
      currentSlide: {}
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
      console.log(currentWork)
    }
  },
  methods: {
    handleSlide(dir) {
      switch(dir) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    },
    makeArrReqImg(array) {
      return array.map(item => {
        const requirePic = require(`../images/content/${item.img}`);
        item.img = requirePic;

        return item;
      })
    }
  },
  created() {
    const data = require('../data/portfolio.json');
    this.works = this.makeArrReqImg(data);
  }
});
