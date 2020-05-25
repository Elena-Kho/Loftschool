<template lang="pug">
  section.about.section
    .container
      .about__header.section__header.container--block
        h2.about__title.section__title Блок Обо мне
        .about__add
          button(type='button' @click.prevent='toggleShow' v-if='!ShowAddBlock').about__btn Добавить группу
      ul.skills__list.section__list
        li.skills__item.new-skill.section__item(v-if='ShowAddBlock')
          aboutAddComp(@toggleShow='toggleShow')
        li.skills__item.new-skill.section__item
          aboutItemComp
</template>


<script>
  import aboutAddComp from './aboutAdd'
  import aboutItemComp from './aboutItem'
  export default {
    components: {
      aboutAddComp,
      aboutItemComp
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
