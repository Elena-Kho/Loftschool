<template lang="pug">
  .container
    ul.portfolio__new-list.section__new-list
      li.portfolio__add-item.section__add-item
        button.portfolio__add-btn.section__add-btn(type='button') +
        p.portfolio__add-note.section__add-note Добавить работу
      li.portfolio__new-item.section__new-item
        .portfolio__new-preview
          .portfolio__new-img
            img.portfolio__new-pic(src='')
          ul.portfolio__new-tags
            li.portfolio__new-tag HTML
            li.portfolio__new-tag CSS
            li.portfolio__new-tag Javascript
          .portfolio__new-info.container
            h3.portfolio__new-info-title.section__new-info-title Сайт школы образования
            p.portfolio__new-info-text.section__new-info-text
              | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='http://loftschool.ru').portfolio__new-info-link http://loftschool.ru
            .portfolio__new-btns.section__new-btns
              button.portfolio__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
              button.portfolio__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
      li.portfolio__new-item.section__new-item
        .portfolio__new-preview
          .portfolio__new-img
            img.portfolio__new-pic(src='')
          ul.portfolio__new-tags
            li.portfolio__new-tag HTML
            li.portfolio__new-tag CSS
            li.portfolio__new-tag Javascript
          .portfolio__new-info.container
            h3.portfolio__new-info-title.section__new-info-title Сайт школы образования
            p.portfolio__new-info-text.section__new-info-text
              | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='http://loftschool.ru').portfolio__new-info-link http://loftschool.ru
            .portfolio__new-btns.section__new-btns
              button.portfolio__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
              button.portfolio__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
      li.portfolio__new-item.section__new-item
        .portfolio__new-preview
          .portfolio__new-img
            img.portfolio__new-pic(src='')
          ul.portfolio__new-tags
            li.portfolio__new-tag HTML
            li.portfolio__new-tag CSS
            li.portfolio__new-tag Javascript
          .portfolio__new-info.container
            h3.portfolio__new-info-title.section__new-info-title Сайт школы образования
            p.portfolio__new-info-text.section__new-info-text
              | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='http://loftschool.ru').portfolio__new-info-link http://loftschool.ru
            .portfolio__new-btns.section__new-btns
              button.portfolio__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
              button.portfolio__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {

      }
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
