<template lang="pug">
  .section__item-wrapper
    .reviews__item-header.section__item-header.container--skill
      h3.reviews__item-title.section__item-title Новый отзыв
    .reviews__item-main.container--skill
      form.reviews__upload(action='#', method='post', enctype='multipart/form-data')
        .reviews__upload-wrapper(ref='inputFile')
          label.reviews__upload-label
            span.reviews__upload-text Добавить фото
            input(type='file', name='ava', value='', placeholder='' @input='loadFile')
      .reviews__desc
        form.reviews__form.form.form--rev(action='#', method='post')
          p.form__input.form__input--rev
            label.form__input-label Имя автора
              input#name.form__input-input(type='text', name='sitename', value='', placeholder='', required v-model='review.author')
          p.form__input.form__input--rev
            label.form__input-label Титул автора
              input#title.form__input-input(type='text', name='sitelink', value='', placeholder='', required v-model='review.occ')
          p.form__input.form__input--area
            label.form__input-label Отзыв
              textarea#message.form__input-text(name='message', rows='5', placeholder='', required v-model='review.text')
          .form__btns.form__btns--rev
            button.form__btn.form__btn--no(type='reset' @click.prevent='$emit("toggleShow")') Отмена
            button.form__btn.button(type='submit' @click.prevent='createNewReview') Сохранить
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {
        review: {
          photo: {},
          author: '',
          occ: '',
          text: ''
        },
      }
    },
    methods: {
      validForm() {
        for (let i in this.review) {
          if (!this.review[i]) {
            return false
          }
          if (!this.review.photo.name) {
            return false
          }
          return true
        }
      },
      loadFile(e) {
        const file = e.target.files[0];
        this.review.photo = file;
        const img = this.$refs.inputFile;

        const reader = new FileReader();
        return new Promise((resolve, reject) => {
          try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              resolve(reader.result);
            };
          } catch (error) {
              throw new Error('Ошибка при чтении файла')
            }
        })
        .then(result => img.style.background = `url(${result})`)
      },
      createNewReview() {
        if (this.validForm()) {
          const formData = new FormData();
          formData.set('author', this.review.author);
          formData.set('photo', this.review.photo);
          formData.set('occ', this.review.occ);
          formData.set('text', this.review.text);
          this.$emit('addReview', formData)
        } else {
            alert("Заполните все данные формы")
          }
      },
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
  .reviews__upload-text {
    display: block;
    width: 200px;
    height: 200px;
    padding-top: 230px;
    font-size: 16px;
    font-weight: 700;
    color: #1d52dd;
    cursor: pointer;
  }
  @media screen and (max-width: 1199px) {
    .reviews__upload {
      width: 25%;
    }
    .reviews__desc {
      width: 65%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media screen and (max-width: 767px) {
    .reviews__item-main {
      flex-direction: column;
      align-items: center;
    }
    .reviews__upload {
      width: 80%;
    }
    .reviews__desc {
      width: 100%;
      margin-top: 60px;
    }
    .reviews__upload-wrapper {
      margin: 0 auto;
    }
  }
</style>
