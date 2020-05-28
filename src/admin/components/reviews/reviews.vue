<template lang="pug">
  section.reviews.section
    .container
      .reviews__header.section__header.container--block
          h2.reviews__title.section__title Блок Отзывы
      .reviews.section-main
        ul.reviews__list.section__list.container
          li.reviews__item.section__item(v-if='ShowAddBlock')
            reviewsAddComp
          li.reviews__item.section__item(v-else)
            reviewsEditComp
        ul.reviews__new-list.section__new-list
          li.reviews__add-item.section__add-item
            button.reviews__add-btn.section__add-btn(type='button' @click.prevent='toggleShow') +
            p.reviews__add-note.section__add-note Добавить отзыв
          li.reviews__new-item.section__new-item
            reviewsItemComp
</template>


<script>
  import reviewsAddComp from './reviewsAdd'
  import reviewsEditComp from './reviewsEdit'
  import reviewsItemComp from './reviewsItem'
  export default {
    components: {
      reviewsAddComp,
      reviewsEditComp,
      reviewsItemComp
    },
    data() {
      return {
        ShowAddBlock: false
      }
    },
    methods: {
      toggleShow() {
        this.ShowAddBlock = !this.ShowAddBlock
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .reviews__item {
    width: 100%;
  }
</style>
