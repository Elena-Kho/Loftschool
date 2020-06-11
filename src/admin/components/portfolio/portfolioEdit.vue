<template lang="pug">
  .section__item-wrapper
    .portfolio__item-header.section__item-header.container--header
      h3.portfolio__item-title.section__item-title Редактирование работы
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
              input#name.form__input-input(type='text', name='sitename', value='', placeholder='', required v-model='CurrentWork.title')
          p.form__input
            label.form__input-label Ссылка
              input#link.form__input-input(type='text', name='sitelink', value='', placeholder='', required v-model='CurrentWork.link')
          p.form__input
            label.form__input-label Описание
              textarea#message.form__input-text(name='message', rows='5', placeholder='', required v-model='CurrentWork.description')
          p.form__input
            label.form__input-label Добавление тега
              input#tags.form__input-input(type='text', name='tags', value='', placeholder='', required v-model='CurrentWork.techs' @input='createNewTag')
          ul.form__tags
            li.form__tag(v-for='tag in tags' :key="tag.id")
              button.form__tag-btn(type='button' @click.prevent='delTag') {{tag}}
          .form__btns
            button.form__btn.form__btn--no(type='reset' @click.prevent='toggleShowEdit') Отмена
            button.form__btn.button(type='submit' @click.prevent='editCurrentWork') Сохранить
</template>


<script>
  export default {
    components: {

    },
    props: {
      workToEdit: Object,
    },
    data() {
      return {
        CurrentWork: [],
        tags: []
      }
    },
    created() {
      this.CurrentWork = this.workToEdit;
    },
    methods: {
      toggleShowEdit() {
        this.$emit('toggleShowEdit');
      },
      validForm() {
        for (let i in this.CurrentWork) {
          if (!this.CurrentWork[i]) {
            return false
          }
          return true
        }
      },
      loadFile(e) {
        const file = e.target.files[0];
        this.CurrentWork.photo = file;
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
      createNewTag() {
        this.tags = this.CurrentWork.techs.split(' ');
      },
      delTag(tag) {
        let index = parseInt(this.tags.indexOf(tag));

        this.tags.splice(index, 1);
        this.CurrentWork.techs = this.tags.join(' ')
      },
      editCurrentWork() {
        if (this.validForm()) {
          const formData = new FormData();
          formData.set('title', this.CurrentWork.title);
          formData.set('techs', this.CurrentWork.techs);
          formData.set('link', this.CurrentWork.link);
          formData.set('description', this.CurrentWork.description);

          if (this.CurrentWork.photo.name) {
            formData.set('photo', this.CurrentWork.photo);
          }

          const sendData = {
            id: this.CurrentWork.id,
            data: formData
          }

          this.$emit('editWork', sendData)
        } else {
            alert("Заполните все данные формы")
          }
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
