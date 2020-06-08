import Vue from 'vue';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

const reviewsSlide = {
  template: '#reviews-slide',
  data() {
    return {
      imgUrl: 'https://webdev-api.loftschool.com'
    }
  },
  props: ['slide']
};

const reviewsSlider = {
  template: '#reviews-slider',
  components: {
    reviewsSlide
  },
  props: ['slides']
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
      slides: [],
      slidesIndex: 0
    }
  },

  async created() {
    const {data} = await request.get('/reviews/339');
    this.slides = data;
  },

  methods: {
    checkBtn(dir) {
      let currentIndex = this.slidesIndex;
      let screenSlides = 0;
      let sumSlidesWidth = 0;
      let numberToMove = 0;

      const defineSlider = this.$children[1].$refs.moveSlider
      const sliderBlock = this.$refs.sliderBlock;
      let slideArr = this.$children[1].$refs.moveSlider.children;


      let sliderBlockWidth = parseInt(window.getComputedStyle(sliderBlock).width);


      for (let slide of slideArr) {
        let slideWidth = parseInt(window.getComputedStyle(slide).width);
        sumSlidesWidth += slideWidth;
      }

      screenSlides = Math.ceil(sumSlidesWidth / sliderBlockWidth);

      if (dir === "next") {
        currentIndex++;
        indexTest();
        this.slidesIndex = currentIndex;
      }

      if (dir === "prev") {
        currentIndex--;
        indexTest();
        this.slidesIndex = currentIndex;
      }

      function indexTest() {
        if (currentIndex >= screenSlides) {
          currentIndex = screenSlides - 1;
        }
        if (currentIndex < 0) {
          currentIndex = 0;
        }

        numberToMove = 100 * currentIndex + '%';
        defineSlider.style.transform = `translateX(-${numberToMove})`;
      }
    }
  }
});
