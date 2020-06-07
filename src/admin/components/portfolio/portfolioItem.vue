<template lang="pug">
  .portfolio__new-preview
    .portfolio__new-img
      img.portfolio__new-pic(:src='BasePath + work.photo')
    ul.portfolio__new-tags
      li.portfolio__new-tag(v-for='tag in tags' :key='tag.id') {{tag}}
    .portfolio__new-info.container--skill
      h3.portfolio__new-info-title.section__new-info-title {{work.title}}
      p.portfolio__new-info-text.section__new-info-text
        | {{work.description}}
      a(href='http://loftschool.ru').portfolio__new-info-link {{work.link}}
      .portfolio__new-btns.section__new-btns
        button.portfolio__new-btn.section__new-btn.section__new-btn--pencil(type='button' @click.prevent='getWorkToEdit') Править
        button.portfolio__new-btn.section__new-btn.section__new-btn--trash(type='button' @click.prevent='removeCurrentWork') Удалить
</template>


<script>
  export default {
    props: {
      work: Object,
    },
    components: {

    },
    data() {
      return {
        tags: [],
        BasePath: 'https://webdev-api.loftschool.com/'
      }
    },
    created() {
      this.tags = this.work.techs.split(' ')
    },
    methods:{
      removeCurrentWork() {
        this.$emit('delWork', this.work.id);
      },
      getWorkToEdit() {
        this.$emit('getWorkToEdit', this.work);
      },
    }
  }
</script>


<style lang='pcss' scoped>
  .portfolio__new-preview {
    width: 100%;
  }
  .portfolio__new-img {
    width: 100%;
    min-height: 190px;
    background-color: lightgrey;
  }
  .portfolio__new-tags {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin-top: -50px;
    list-style: none;
  }
  .portfolio__new-tag {
    margin-right: 10px;
    padding: 7px 12px;
    background-color: #ffffff;
    border-radius: 20px;
  }
  .portfolio__new-info-link {
    display: block;
    margin: 0;
    padding: 0;
    margin-top: 30px;
    color: #1d52dd;
    text-decoration: none;
  }
</style>
