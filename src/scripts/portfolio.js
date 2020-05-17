import Vue from 'vue';

const num = {
  template: '#portfolio-num',
  props: ['currentWork'],
};

const btns = {
  template: '#portfolio-btns',
  props: ['works', 'currentWork'],
};

const thumbs = {
  template: '#portfolio-thumbs',
  props: ['works', 'currentWork'],
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
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
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
    }
  },
  watch: {
    currentIndex(value) {
      this.toCheckSlidesNum(value);
    }
  },
  methods: {
    toCheckSlidesNum(value) {
      const worksSlidesNum = this.works.length - 1;
      if ( value > worksSlidesNum) this.currentIndex = worksSlidesNum;
      if ( value < 0) this.currentIndex = 0;
    },
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
