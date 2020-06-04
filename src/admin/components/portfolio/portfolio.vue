<template lang="pug">
  section.portfolio.section
    .container
      .portfolio__header.section__header.container--block
          h2.portfolio__title.section__title Блок Работы
      .portfolio.section-main
        ul.portfolio__list.section__list.container
          li.portfolio__item.section__item(v-if='ShowAddBlock')
            portfolioAddComp(
            @toggleShow='toggleShow'
            @addWork='addWork'
            )
          li.portfolio__item.section__item(v-if='ShowEditBlock')
            portfolioEditComp
        ul.portfolio__new-list.section__new-list
          li.portfolio__add-item.section__add-item
            button.portfolio__add-btn.section__add-btn(type='button' @click.prevent='toggleShow') +
            p.portfolio__add-note.section__add-note Добавить работу
          li.portfolio__new-item.section__new-item(v-for='work in works' :key='work.id')
            portfolioItemComp(
            :work='work'
            :tags='tags'
            @delWork='delWork'
            )
</template>


<script>
  import axios from 'axios'
  import portfolioAddComp from './portfolioAdd'
  import portfolioEditComp from './portfolioEdit'
  import portfolioItemComp from './portfolioItem'
  import requests from '../../requests'

  export default {
    components: {
      portfolioAddComp,
      portfolioEditComp,
      portfolioItemComp
    },
    data() {
      return {
        ShowAddBlock: false,
        ShowEditBlock: false,
        works: []
      }
    },
    created() {
      this.getWorks();
    },
    methods: {
      toggleShow() {
        this.ShowAddBlock = !this.ShowAddBlock
      },
      addWork(formData) {
        requests.post('/works', formData).then(response => {
          console.log(response.data)
          this.works.unshift(response.data)
        })
        this.ShowAddBlock = false
      },
      getWorks() {
        requests.get('/works/339').then(response => {
          console.log(response.data)
          this.works = response.data
        })
      },
      delWork(workID) {
        requests.delete(`/works/${workID}`).then(response => {
          this.works = this.works.filter(item => item.id !== workID)
        })
      },
    }
  }
</script>


<style lang='pcss' scoped>
  .portfolio__item {
    width: 100%;
  }
</style>
