<template lang="pug">
  .section__item-wrapper
    .portfolio__item-header.section__item-header.container--header
      h3.portfolio__item-title.section__item-title Добавление работы
    .portfolio__item-main.container--item
      form.portfolio__upload(action='#', method='post', enctype='multipart/form-data' ref='inputFile')
        p.portfolio__upload-text Загрузите изображение
        .portfolio__upload-wrapper
          label.portfolio__upload-label
            span.portfolio__upload-btn.button Загрузить
            input(type='file', name='img', value='', placeholder='' @input='loadFile')
      .portfolio__desc
        form.portfolio__form.form(action='#', method='post')
          p.form__input
            label.form__input-label Название
              input#name.form__input-input(type='text', name='sitename', value='', placeholder='', required v-model='work.title')
          p.form__input
            label.form__input-label Ссылка
              input#link.form__input-input(type='text', name='sitelink', value='', placeholder='', required v-model='work.link')
          p.form__input
            label.form__input-label Описание
              textarea#message.form__input-text(name='message', rows='5', placeholder='', required v-model='work.description')
          p.form__input
            label.form__input-label Добавление тега
              input#tags.form__input-input(type='text', name='tags', value='', placeholder='', required v-model='work.techs' @input='createNewTag')
          ul.form__tags
            li.form__tag(v-for='tag in tags' :key="tag.id")
              button.form__tag-btn(type='button' @click.prevent='delTag') {{tag}}
          .form__btns
            button.form__btn.form__btn--no(type='reset' @click.prevent='$emit("toggleShow")') Отмена
            button.form__btn.button(type='submit' @click.prevent='createNewWork') Сохранить
    .modal(v-if='activeModal')
      button.modal__button-close(type='button' @click.prevent='activeModal = false')
      p.modal__text Заполните все данные формы
</template>


<script>
  export default {
    components: {

    },
    data() {
      return {
        work: {
          title: '',
          techs: '',
          photo: {},
          link: '',
          description: ""
        },
        tags: [],
        activeModal: false
      }
    },
    methods: {
      validForm() {
        for (let i in this.work) {
          if (!this.work[i]) {
            return false
          }
          if (!this.work.photo.name) {
            return false
          }
          return true
        }
      },
      loadFile(e) {
        const file = e.target.files[0];
        this.work.photo = file;
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
      createNewWork() {
        if (this.validForm()) {
          const formData = new FormData();
          formData.set('title', this.work.title);
          formData.set('techs', this.work.techs);
          formData.set('photo', this.work.photo);
          formData.set('link', this.work.link);
          formData.set('description', this.work.description);
          this.$emit('addWork', formData)
        } else {
            this.activeModal = true;
          }
      },
      createNewTag() {
        this.tags = this.work.techs.split(' ');
      },
      delTag(e) {
        let tag = e.target.textContent;
        let index = parseInt(this.tags.indexOf(tag));

        this.tags.splice(index, 1);
        this.work.techs = this.tags.join(' ')
      },
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
    .modal {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100px;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px 0px;
  }
  .modal__button-close {
    align-self: flex-end;
    width: 15px;
    height: 15px;
    margin-top: 10px;
    margin-right: 10px;
    background: svg-load('remove.svg', width: 12, height: 12, fill: grey) no-repeat 0 0;
  }
  .modal__text {
    display: block;
    margin-top: 10px;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    color: red;
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
    .modal {
      width: 50%;
    }
  }
  @media screen and (max-width: 479px) {
    .modal {
      width: 100%;
    }
  }
</style>
