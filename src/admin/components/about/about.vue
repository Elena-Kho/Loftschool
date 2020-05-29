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
            @addSkill='addSkill'
          )
</template>

<script>
  import axios from 'axios'
  import aboutAddComp from './aboutAdd'
  import aboutItemComp from './aboutItem'

  const baseUrl = 'https://webdev-api.loftschool.com';
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA3MzgyMTAsImV4cCI6MTU5MDc1NjIxMCwibmJmIjoxNTkwNzM4MjEwLCJqdGkiOiJNeGJib3ROc1ZaZFhUUW4wIn0.RyDxf-D2HzTUvIfeCUlJHykJ-jIzi18klxw_xLnN-4g"

  axios.defaults.baseUrl = baseUrl;
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;

  export default {
    components: {
      aboutAddComp,
      aboutItemComp
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
        axios.post(baseUrl + '/categories', category).then(response => {
          this.categories.unshift(response.data)
        })
        this.ShowAddBlock = false
      },
      getCategories() {
        axios.get(baseUrl + '/categories/339').then(response => {
          this.categories = response.data
        })
      },
      addSkill(skill) {
        axios.post(baseUrl + '/skills', skill).then(response => {
          console.log(skill)
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
