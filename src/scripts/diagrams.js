import Vue from 'vue';

const diagram = {
  template: '#diagram',
  props: ['skill'],
  methods: {
    drawColoredCircle() {
      const circle = this.$refs['circle'];
      const dashArray  = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      circle.style.strokeDashoffset = percent;
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
  created() {
    const data = require('../data/skills.json');
    this.skills = data;
  }
});
