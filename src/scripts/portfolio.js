import Vue from 'vue';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

const num = {
  template: '#portfolio-num',
  props: ['currentWork', 'currentIndex']
};

const btns = {
  template: '#portfolio-btns',
  props: ['works', 'currentWork', 'currentIndex'],
};

const thumbs = {
  template: '#portfolio-thumbs',
  props: ['works', 'currentWork'],
};

const tags = {
  template: '#portfolio-tags',
  props: ['tags'],
  computed: {
    tagsArray() {
      return this.tags.techs.split(' ');
    }
  }
};


const display = {
  template: '#portfolio-display',
  components: {
    thumbs,
    btns
  },
  props: ['works', 'currentWork', 'currentIndex'],
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
  props: ['currentWork']
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
    /*makeArrReqImg(array) {
      return array.map(item => {
        const requirePic = require(`../images/content/${item.img}`);
        item.img = requirePic;

        return item;
      })
    }*/
  },
  async created() {
    const {data}  = await request.get('/works/339');
    //this.works = this.makeArrReqImg(response.data);
    this.works = data
  }
});
