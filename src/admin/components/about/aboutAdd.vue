<template lang="pug">
  .section__item-wrapper
    .new-skill__header-wrapper
      .new-skill__header.section__item-header.container--skill(v-if='groupAddBtn')
        input.new-skill__header-title.section__item-title(type='text', name='newgroup', value='', placeholder='Название новой группы', required v-model='category.title')
        .new-skill__header-btns.section__header-btns
          button.new-skill__header-btn.section__item-btn.section__item-btn--tick(type='submit' @click.prevent='createNewCategory')
          button.new-skill__header-btn.section__item-btn.section__item-btn--remove(type='reset' @click.prevent='$emit("toggleShow")')
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {
        groupAddBtn: true,
        category: {
          title: ''
        }
      }
    },
    methods: {
      createNewCategory() {
        this.$emit('addCategory', this.category)
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
  .new-skill__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;

    outline: 1px solid lime;
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
