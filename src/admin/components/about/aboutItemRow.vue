<template lang="pug">
  .new-skill__main-row
    input.new-skill__main-skill.section__main-item(type='text', name='newskill', value='', placeholder='GIT', required='', :disabled='!EditBtn')
    input.new-skill__main-percent.section__main-percent(type='text', name='percent', value='', :placeholder='skill.title', required, :disabled='!EditBtn')
    .new-skill__main-btns(v-if='EditBtn')
      button.new-skill__main-btn.section__item-btn.section__item-btn--tick(type='button')
      button.new-skill__main-btn.section__item-btn.section__item-btn--remove(type='button' @click.prevent='EditBtn = false')
    .new-skill__main-btns(v-else)
      button.new-skill__main-btn.section__item-btn.section__item-btn--pencil(type='button' @click.prevent='EditBtn = true')
      button.new-skill__main-btn.section__item-btn.section__item-btn--trash(type='button')
</template>


<script>
  export default {
    props: {
      skill: Array
    },
    components: {

    },
    data() {
      return {
        EditBtn: false,
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .new-skill__main-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .new-skill__main-skill {
    width: 70%;
    padding-top: 25px;
  }

  .new-skill__main-percent {
    width: 15%;
    padding-top: 25px;
  }

  .new-skill__main-btns {
    display: flex;
    justify-content: flex-end;
    width: 15%;
    padding-top: 25px;
  }

  @media screen and (max-width: 1199px) {
    .new-skill__main-skill {
      width: 55%;
    }

    .new-skill__main-percent {
      width: 20%;
    }

    .new-skill__main-btns {
      width: 25%;
    }
  }

  @media screen and (max-width: 479px) {
    .new-skill__main-skill {
      width: 50%;
    }

    .new-skill__main-percent {
      width: 20%;
    }

    .new-skill__main-btns {
      width: 30%;
    }
  }
</style>
