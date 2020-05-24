<template lang="pug">
  ul.reviews__new-list.section__new-list
    li.reviews__add-item.section__add-item
      button.reviews__add-btn.section__add-btn(type='button') +
      p.reviews__add-note.section__add-note Добавить отзыв
    li.reviews__new-item.section__new-item
      .reviews__new-header
        .reviews__new-img
          img.reviews__new-pic(src='')
        .reviews__new-pers
          h3.reviews__new-name Владимир Сабанцев
          p.reviews__new-pos Преподаватель
      .reviews__new-info.container--skill
        h3.reviews__new-info-title.section__new-info-title Сайт школы образования
        p.reviews__new-info-text.section__new-info-text
          | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .reviews__new-btns.section__new-btns
          button.reviews__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
          button.reviews__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
    li.reviews__new-item.section__new-item
      .reviews__new-header
        .reviews__new-img
          img.reviews__new-pic(src='')
        .reviews__new-pers
          h3.reviews__new-name Владимир Сабанцев
          p.reviews__new-pos Преподаватель
      .reviews__new-info.container--skill
        h3.reviews__new-info-title.section__new-info-title Сайт школы образования
        p.reviews__new-info-text.section__new-info-text
          | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .reviews__new-btns.section__new-btns
          button.reviews__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
          button.reviews__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
    li.reviews__new-item.section__new-item
      .reviews__new-header
        .reviews__new-img
          img.reviews__new-pic(src='')
        .reviews__new-pers
          h3.reviews__new-name Владимир Сабанцев
          p.reviews__new-pos Преподаватель
      .reviews__new-info.container--skill
        h3.reviews__new-info-title.section__new-info-title Сайт школы образования
        p.reviews__new-info-text.section__new-info-text
          | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .reviews__new-btns.section__new-btns
          button.reviews__new-btn.section__new-btn.section__new-btn--pencil(type='button') Править
          button.reviews__new-btn.section__new-btn.section__new-btn--remove(type='button') Удалить
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
  .reviews__new-header {
    display: flex;
    justify-content: space-between;
  }
  .reviews__new-img {
    width: 20%;
  }
  .reviews__new-pic {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .reviews__new-pers {
    width: 80%;
    margin-left: 20px;
  }
  .reviews__new-name {
    font-weight: 900;
  }
</style>
