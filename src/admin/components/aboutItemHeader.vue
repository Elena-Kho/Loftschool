<template lang="pug">
  .new-skill__header-wrapper
    .new-skill__header.section__item-header.container--skill(v-if='groupEditBtn')
      input.new-skill__header-title.section__item-title(type='text', name='newgroup', value='', placeholder='Название новой группы', required='')
      .new-skill__header-btns.section__header-btns
        button.new-skill__header-btn.section__item-btn.section__item-btn--tick(type='button')
        button.new-skill__header-btn.section__item-btn.section__item-btn--remove(type='button' @click.prevent='groupEditBtn = false')
    .new-skill__header.section__item-header.container--skill(v-else)
      input.new-skill__header-title.section__item-title(type='text', name='newgroup', value='', placeholder='', disabled)
      .new-skill__header-btns.section__header-btns
        button.new-skill__header-btn.section__item-btn.section__item-btn--pencil(type='button' @click.prevent='groupEditBtn = true')
        button.new-skill__header-btn.section__item-btn.section__item-btn--trash(type='button')
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {
        groupEditBtn: false
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .new-skill__header-title.section__item-title {
    display: block;
    width: 85%;
    font: inherit;
    font-size: 18px;
    font-weight: 300;
    border: none;
  }

  .new-skill__header-btns {
    display: flex;
    justify-content: flex-end;
    width: 15%;
  }
  @media screen and (max-width: 1199px) {
    .new-skill__header-title.section__item-title {
      width: 75%;
    }
    .new-skill__header-btns {
      width: 25%;
    }
  }
  @media screen and (max-width: 479px) {
    .new-skill__header-title.section__item-title {
      width: 70%;
    }
    .new-skill__header-btns {
      width: 30%;
    }
  }
</style>
