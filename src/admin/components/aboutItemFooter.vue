<template lang="pug">
  .new-skill__footer.container--skill
    input.new-skill__footer-skill.section__footer-item(type='text', name='newskill', value='', placeholder='Новый навык', required='')
    input.new-skill__footer-percent.section__footer-percent(type='text', name='percent', value='', placeholder='100 %', required='')
    button.new-skill__footer-btn.section__footer-btn +
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {

      }
    }
  }
</script>


<style lang='pcss' scoped>
  .new-skill__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;

    outline: 1px solid lime;
  }
</style>
