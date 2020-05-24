<template lang="pug">
  section.about.section
    .container
      .about__header.section__header.container--block
        h2.about__title.section__title Блок Обо мне
        .about__add
          button.about__btn(type='button') +
          p.about__btn-txt Добавить группу
      aboutItemComp
</template>


<script>
  import aboutItemComp from './aboutItem'
  export default {
    components: {
      aboutItemComp
    },
    data() {
      return {

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
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    color: white;
    border: none;
    border-radius: 50%;
    background-color: #383bcf;
  }

  .about__btn-txt {
    display: block;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    vertical-align: middle;
    font-size: 16px;
    color: #383bcf;
  }
  @media screen and (max-width: 767px)  {
    .about__add {
      margin-top: 30px;
    }
  }
</style>
