<template lang="pug">
  section.reviews.section
    .reviews.section-main
      reviewsEditComp
      reviewsAddComp
</template>


<script>
  import reviewsEditComp from './reviewsEdit'
  import reviewsAddComp from './reviewsAdd'
  export default {
    components: {
      reviewsEditComp,
      reviewsAddComp
    },
    data() {
      return {

      }
    }
  }
</script>


<style lang='pcss' scoped>

</style>
