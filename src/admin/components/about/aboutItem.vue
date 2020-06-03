<template lang="pug">
  .section__item-wrapper
    .new-skill__header-wrapper
      .new-skill__header.section__item-header.container--skill(v-if='groupEditBtn')
        input.new-skill__header-title.section__item-title(type='text', name='newgroup', value='', :placeholder='category.category', required v-model='editedCategory.title')
        .new-skill__header-btns.section__header-btns
          button.new-skill__header-btn.section__item-btn.section__item-btn--tick(type='button' @click.prevent='editCurrentCategory')
          button.new-skill__header-btn.section__item-btn.section__item-btn--remove(type='button' @click.prevent='groupEditBtn = false')
      .new-skill__header.section__item-header.container--skill(v-else)
        input.new-skill__header-title.section__item-title(type='text', name='newgroup', value='', :placeholder='category.category', disabled)
        .new-skill__header-btns.section__header-btns
          button.new-skill__header-btn.section__item-btn.section__item-btn--pencil(type='button' @click.prevent='groupEditBtn = true')
          button.new-skill__header-btn.section__item-btn.section__item-btn--trash(type='button' @click.prevent='removeCurrentCategory')
    .new-skill__main.container--skill
      ul.new-skill__main-list
        li.new-skill__main-item(v-for='skill in category.skills' :key='skill.id')
          aboutItemRowComp(
            :skill='skill'
            @delSkill='delSkill'
            @editSkill='editSkill'
          )
    .new-skill__footer.container--skill
      input.new-skill__footer-skill.section__footer-item(type='text', name='newskill', value='', placeholder='Новый навык', required v-model='skill.title')
      input.new-skill__footer-percent.section__footer-percent(type='text', name='percent', value='', placeholder='100 %', required v-model='skill.percent')
      button(type='submit' @click.prevent='createNewSkill').new-skill__footer-btn.section__footer-btn +
</template>


<script>
  import aboutItemRowComp from './aboutItemRow'
  export default {
    props: {
      category: Object
    },
    components: {
      aboutItemRowComp
    },
    data() {
      return {
        groupEditBtn: false,
        skill: {
          title: '',
          percent: 0,
          category: this.category.id
        },
        editedCategory: {
          id: this.category.id,
          title: this.category.category
        }
      }
    },
    methods: {
      createNewSkill() {
        this.$emit('addSkill', {...this.skill});
        this.skill.title = '';
        this.skill.percent = 0
      },
      removeCurrentCategory() {
        this.$emit('delCategory', this.category.id);
      },
      delSkill(deletedSkill) {
        this.$emit('delSkill', deletedSkill);
      },
      editCurrentCategory() {
        this.$emit('editCategory', this.editedCategory);
        this.groupEditBtn = false
      },
      editSkill(editedSkill) {
        this.$emit('editSkill', editedSkill)
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .new-skill__main-list {
    margin-bottom: 30px;
  }
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
