<template lang="pug">
  section.about.section
    .container
      .about__header.section__header.container--block
        h2.about__title.section__title Блок Обо мне
        .about__add
          button(type='button' @click.prevent='toggleShow' v-if='!ShowAddBlock').about__btn Добавить группу
      ul.skills__list.section__list
        li.skills__item.new-skill.section__item(v-if='ShowAddBlock')
          aboutAddComp(
            @toggleShow='toggleShow'
            @addCategory='addCategory'
          )
        li.skills__item.new-skill.section__item(v-for='category in categories' :key='category.id' )
          aboutItemComp(
            :category='category'
            :editedCategory='editedCategory'
            @delCategory='delCategory'
            @editCategory='editCategory'
            @addSkill='addSkill'
            @delSkill='delSkill'
            @editSkill='editSkill'
          )
</template>

<script>

  import axios from 'axios'
  import aboutAddComp from './aboutAdd'
  import aboutItemComp from './aboutItem'
  import requests from '../../requests'


  export default {
    components: {
      aboutAddComp,
      aboutItemComp
    },
    props: {
      groupEditBtn: Boolean,
      editedCategory: Object
    },
    data() {
      return {
        ShowAddBlock: false,
        categories: []
      }
    },
    created() {
      this.getCategories();
    },
    methods: {
      toggleShow() {
        this.ShowAddBlock = !this.ShowAddBlock
      },
      addCategory(category) {
        requests.post('/categories', category).then(response => {
          this.categories.unshift(response.data)
        })
        this.ShowAddBlock = false
      },
      getCategories() {
        requests.get('/categories/339').then(response => {
          this.categories = response.data
        })
      },
      delCategory(categoryID) {
        requests.delete(`/categories/${categoryID}`).then(response => {
          this.categories = this.categories.filter(item => item.id !== categoryID)
        })
      },
      editCategory(editedCategory) {
        requests.post(`/categories/${editedCategory.id}`, editedCategory).then(response => {
          this.categories = this.categories.map(category => {
            if(category.id == response.data.category.id) {
              category.category = response.data.category.category
            }
            return category;
          })
        })
      },
      addSkill(skill) {
        requests.post('/skills', skill).then(response => {
          this.categories = this.categories.map(category => {
            if (category.id == skill.category) {
              category.skills.push(response.data);
            }
            return category;
          })
        })
      },
      getSkills() {
        requests.get('/skills/339').then(response => {
          this.categories = response.data
        })
      },
      delSkill(deletedSkill) {
        requests.delete(`/skills/${deletedSkill.id}`, deletedSkill).then(response => {
          this.categories = this.categories.map(category => {
            if (category.id == deletedSkill.category) {
              category.skills = category.skills.filter(item => item.id !== deletedSkill.id)
            }
            return category;
          })
        })
      },
      editSkill(editedSkill) {
        requests.post(`/skills/${editedSkill.id}`, editedSkill).then(response => {
          this.categories = this.categories.map(category => {
            if (category.id == editedSkill.category) {
              category.skills = category.skills.map(skill => {
                return skill.id == editedSkill.id ? editedSkill : skill
              })
            }
            return category;
          })
        })
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .about__add {
    display: flex;
    align-items: flex-end;
    margin-top: 60px;
  }
  .about__btn {
    position: relative;
    width: 200px;
    height: 20px;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #383bcf;
    border: none;
    &:before {
      position: absolute;
      content: "+";
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      color: white;
      line-height: 20px;
      border-radius: 50%;
      background: #383bcf ;
    }
  }
  @media screen and (max-width: 767px)  {
    .about__add {
      margin-top: 30px;
    }
  }
  .new-skill__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    outline: 1px solid lime;
  }
</style>
