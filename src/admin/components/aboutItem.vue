<template lang="pug">
  .skills.section-main
    ul.skills__list.section__list
      li.skills__item.new-skill.section__item
        aboutItemHeaderComp
        .new-skill__main.container--skill
          .new-skill__main-table
        aboutItemFooterComp
      li.skills__item.new-skill.section__item
        aboutItemHeaderComp
        .new-skill__main.container--skill
          ul.new-skill__main-list
            li.new-skill__main-item
              aboutItemRowComp
        aboutItemFooterComp
      li.skills__item.new-skill.section__item
        aboutItemHeaderComp
        .new-skill__main.container--skill
          ul.new-skill__main-list
            li.new-skill__main-item
              aboutItemRowComp
        aboutItemFooterComp
      li.skills__item.new-skill.section__item
        aboutItemHeaderComp
        .new-skill__main.container--skill
          ul.new-skill__main-list
            li.new-skill__main-item
              aboutItemRowComp
        aboutItemFooterComp
</template>


<script>
  import aboutItemRowComp from './aboutItemRow'
  import aboutItemHeaderComp from './aboutItemHeader'
  import aboutItemFooterComp from './aboutItemFooter'
  export default {
    components: {
      aboutItemRowComp,
      aboutItemHeaderComp,
      aboutItemFooterComp
    },
    data() {
      return {

      }
    }
  }
</script>


<style lang='pcss' scoped>
  .new-skill__main-list {
    margin-bottom: 30px;
  }
</style>
