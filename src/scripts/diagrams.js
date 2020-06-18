import Vue from 'vue';
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

const diagram = {
  template: '#diagram',
  props: ['skill'],
  methods: {
    drawColoredCircle() {
      const circle = this.$refs['circle'];
      const dashArray  = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      circle.style.strokeDashoffset = percent
    }
  },
  mounted() {
    this.drawColoredCircle();
  },
};

const diagramsRow = {
  template: '#diagrams-row',
  components: {
    diagram,
  },
  props: ['category']
};

new Vue({
  el: '#diagrams-component',
  template: '#diagrams-list',
  components: {
    diagramsRow,
  },
  data() {
    return {
      skills: []
    }

  },
  async created() {
    const {data} = await request.get('/categories/339');
    this.skills = data;
  }
});
