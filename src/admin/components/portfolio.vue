<template lang="pug">
  section.portfolio.section
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
