<template lang="pug">
  section.portfolio.section
    .container
      .portfolio__header.section__header.container--block
          h2.portfolio__title.section__title Блок Работы
      .portfolio.section-main
        portfolioEditComp
        portfolioAddComp
</template>


<script>
  import portfolioEditComp from './portfolioEdit'
  import portfolioAddComp from './portfolioAdd'
  export default {
    components: {
      portfolioEditComp,
      portfolioAddComp
    },
    data() {
      return {

      }
    }
  }
</script>


<style lang='pcss' scoped>

</style>
