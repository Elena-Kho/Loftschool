<template lang="pug">
  section.reviews.section
    .container
      .reviews__header.section__header.container--block
          h2.reviews__title.section__title Блок Отзывы
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
