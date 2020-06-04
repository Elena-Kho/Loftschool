<template lang="pug">
  .section__item-wrapper
    .portfolio__item-header.section__item-header.container--header
      h3.portfolio__item-title.section__item-title Редактирование работы
    .portfolio__item-main.container--item
      form.portfolio__upload(action='#', method='post', enctype='multipart/form-data')
        p.portfolio__upload-text Перетащите или загрузите для загрузки изображения
        .portfolio__upload-wrapper
          label.portfolio__upload-label.button(for='img') Загрузить
          input(type='file', name='img', value='', placeholder='')
      .portfolio__desc
        form.portfolio__form.form(action='#', method='post')
          p.form__input
            label.form__input-label Название
              input#name.form__input-input(type='text', name='sitename', value='', placeholder='', required='')
          p.form__input
            label.form__input-label Ссылка
              input#link.form__input-input(type='text', name='sitelink', value='', placeholder='https://www.porsche-pulkovo.ru', required='')
          p.form__input
            label.form__input-label Описание
              textarea#message.form__input-text(name='message', rows='5', placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей', required='')
          p.form__input
            label.form__input-label Добавление тега
              input#tags.form__input-input(type='text', name='tags', value='', placeholder='Jquery, Vue.js, HTML5', required='')
          .form__tags
            .button.form__tag HTML
              button.form__tag-btn(type='button')
            .button.form__tag CSS
              button.form__tag-btn(type='button')
            .button.form__tag Javascript
              button.form__tag-btn(type='button')
          .form__btns
            button.form__btn.form__btn--no(type='reset') Отмена
            button.form__btn.button(type='submit') Сохранить
</template>


<script>
  export default {
    props: {
      work: Object
    },
    components: {

    },
    data() {
      return {

      }
    }
  }
</script>


<style lang='pcss' scoped>
  .portfolio__item {
    width: 100%;
    background-color: white;
  }
  .portfolio__item-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }
  .portfolio__upload {
    width: 40%;
    height: 275px;
    text-align: center;
    background-color: #dee4ed;
    border: 1px dashed grey;
  }
  .portfolio__upload-text {
    width: 50%;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 50px;
  }
  .portfolio__desc {
    width: 50%;
  }
  @media screen and (max-width: 1199px)  {
    .portfolio__item-main {
      flex-direction: column;
      align-items: center;
    }
    .portfolio__upload {
      width: 100%;
    }
    .portfolio__desc {
      width: 100%;
    }
  }
</style>
