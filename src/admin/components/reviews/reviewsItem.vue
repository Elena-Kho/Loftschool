<template lang="pug">
  .section__new-wrapper
    .reviews__new-header
      .reviews__new-img
        img.reviews__new-pic(src='')
      .reviews__new-pers
        h3.reviews__new-name {{review.author}}
        p.reviews__new-pos {{review.occ}}
    .reviews__new-info.container--skill
      h3.reviews__new-info-title.section__new-info-title
      p.reviews__new-info-text.section__new-info-text
        | {{review.text}}
      .reviews__new-btns.section__new-btns
        button.reviews__new-btn.section__new-btn.section__new-btn--pencil(type='button' @click.prevent='getReviewToEdit') Править
        button.reviews__new-btn.section__new-btn.section__new-btn--trash(type='button' @click.prevent='removeCurrentReview') Удалить
</template>


<script>
  export default {
    components: {

    },
    props: {
      review: Object,
    },
    data() {
      return {

      }
    },
    methods: {
      removeCurrentReview() {
        this.$emit('delReview', this.review.id);
      },
      getReviewToEdit() {
        this.$emit('getReviewToEdit', this.review);
      },
    }
  }
</script>


<style lang='pcss' scoped>
  .reviews__new-header {
    display: flex;
    justify-content: space-between;
  }
  .reviews__new-img {
    width: 20%;
  }
  .reviews__new-pic {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .reviews__new-pers {
    width: 80%;
    margin-left: 20px;
  }
  .reviews__new-name {
    font-weight: 900;
  }
</style>
