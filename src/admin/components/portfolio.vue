<template lang="pug">
  section.portfolio.section
    .container
      .portfolio__header.section__header.container--block
          h2.portfolio__title.section__title Блок Работы
      .portfolio.section-main
        ul.portfolio__list.section__list.container
          li.portfolio__item.section__item(v-if='ShowAddBlock')
            portfolioAddComp
          li.portfolio__item.section__item(v-else)
            portfolioEditComp
        ul.portfolio__new-list.section__new-list
          li.portfolio__add-item.section__add-item
            button.portfolio__add-btn.section__add-btn(type='button' @click.prevent='toggleShow') +
            p.portfolio__add-note.section__add-note Добавить работу
          li.portfolio__new-item.section__new-item
            portfolioItemComp
</template>


<script>
  import portfolioAddComp from './portfolioAdd'
  import portfolioEditComp from './portfolioEdit'
  import portfolioItemComp from './portfolioItem'
  export default {
    components: {
      portfolioAddComp,
      portfolioEditComp,
      portfolioItemComp
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
  .portfolio__item {
    width: 100%;
  }
</style>
