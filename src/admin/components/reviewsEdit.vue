<template lang="pug">
  .container
    ul.reviews__list.section__list.container
      li.reviews__item.section__item
        .reviews__item-header.section__item-header.container--item
          h3.reviews__item-title.section__item-title Новый отзыв
        .reviews__item-main.container--item
          form.reviews__upload(action='#', method='post', enctype='multipart/form-data')
            .reviews__upload-wrapper
              label.reviews__upload-label(for='ava') Добавить фото
              input(type='file', name='ava', value='', placeholder='')
          .reviews__desc
            form.reviews__form.form.form--rev(action='#', method='post')
              p.form__input.form__input--rev
                label.form__input-label(for='name') Имя автора
                br
                input#name.form__input-input(type='text', name='sitename', value='', placeholder='Ковальчук Дмитрий', required='')
              p.form__input.form__input--rev
                label.form__input-label(for='title') Титул автора
                br
                input#title.form__input-input(type='text', name='sitelink', value='', placeholder='Основатель Loftschool', required='')
              p.form__input.form__input--area
                label.form__input-label(for='message') Отзыв
                br
                textarea#message.form__input-text(name='message', rows='5', placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!', required='')
              .form__btns.form__btns--rev
                button.form__btn.form__btn--no(type='reset') Отмена
                button.form__btn.button(type='submit') Сохранить
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
  .reviews__item {
    width: 100%;
  }

  .reviews__item-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }

  .reviews__upload {
    width: 25%;
    text-align: center;
    background-color: #ffffff;
  }

  .reviews__desc {
    width: 60%;
    margin-left: 30px;
    margin-right: auto;
  }

  .reviews__upload-wrapper {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #dee4ed svg-load('man-user.svg', width: 110, height: 145, fill: white) no-repeat 50% 50%;
  }

  .reviews__upload-label {
    display: block;
    width: 200px;
    height: 200px;
    padding-top: 230px;
    font-size: 16px;
    font-weight: 700;
    color: #1d52dd;
  }
</style>
