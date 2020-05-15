<template lang="pug">
  .wrap-admin
    header.header
      .header__wrapper
        .header__user.container
          .header__user-info
            .header__user-ava
              img(src='')
            .header__user-name Елена Ходанович
          .header__panel Панель администрирования
          .header__login
            button.header__login-btn(type='button') Выйти
    nav.header__nav.nav.container
      ul.nav__list
        li.nav__item
          a.nav__link(href='#') Обо мне
        li.nav__item
          a.nav__link(href='#') Работы
        li.nav__item
          a.nav__link(href='#') Отзывы
    main
      h1
      section.about.section
        .container
          .about__header.section__header
            h2.about__title.section__title Блок Обо мне
            .about__add Добавить группу
          .skills.section-main
            ul.skills__list.section__list
              li.skills__item.new-skill.section__item
                .new-skill__header.section__item-header.container--skill
                  h3.new-skill__header-title.section__item-title Название новой группы
                  .new-skill__header-btns
                    button.new-skill__header-btn(type='button')
                    button.new-skill__header-btn(type='button')
                .new-skill__main.container--skill
                  .new-skill__main-table
                .new-skill__footer.container--skill
                  table.new-skill__footer-table
                    tbody
                      tr.new-skill__footer-tr
                        td.new-skill__footer-td1 Новый навык
                        td.new-skill__footer-td2 100 %
              li.skills__item.new-skill.section__item
                .new-skill__header.container--skill.section__item-header
                  h3.new-skill__header-title.section__item-title Workflow
                  .new-skill__header-btns
                    button.new-skill__header-btn(type='button')
                    button.new-skill__header-btn(type='button')
                .new-skill__main.container--skill
                  table.new-skill__main-table
                    tbody
                      tr.new-skill__main-tr
                        td.new-skill__main-td1 Git
                        td.new-skill__main-td2 100 %
                        td.new-skill__main-td3
                          button.new-skill__header-btn(type='button')
                          button.new-skill__header-btn(type='button')
                      tr.new-skill__main-tr
                        td.new-skill__main-td1 Terminal
                        td.new-skill__main-td2 100 %
                        td.new-skill__main-td3
                          button.new-skill__header-btn(type='button')
                          button.new-skill__header-btn(type='button')
                      tr.new-skill__main-tr
                        td.new-skill__main-td1 Gulp
                        td.new-skill__main-td2 100 %
                        td.new-skill__main-td3
                          button.new-skill__header-btn(type='button')
                          button.new-skill__header-btn(type='button')
                      tr.new-skill__main-tr
                        td.new-skill__main-td1 Webpack
                        td.new-skill__main-td2 100 %
                        td.new-skill__main-td3
                          button.new-skill__header-btn(type='button')
                          button.new-skill__header-btn(type='button')
                .new-skill__footer.container--skill
                  table.new-skill__footer-table
                    tbody
                      tr.new-skill__footer-tr
                        td.new-skill__footer-td1 Новый навык
                        td.new-skill__footer-td2 100 %
      section.portfolio.section
        .portfolio.section-main
          .container
            ul.portfolio__list.section__list.container
              li.portfolio__item.section__item
                .portfolio__item-header.section__item-header.container--item
                  h3.portfolio__item-title.section__item-title Редактирование работы
                .portfolio__item-main.container--item
                  .portfolio__upload
                    p.portfolio__upload-text Перетащите или загрузите для загрузки изображения
                    button.portfolio__upload-btn.button(type='button') Загрузить
                  .portfolio__desc
                    form.portfolio__form.form(action='#', method='post')
                      p.form__input
                        label.form__input-label(for='name') Название
                        br
                        input#name.form__input-input(type='text', name='sitename', value='', placeholder='Дизайн сайта для автосалона Porsche', required='')
                      p.form__input
                        label.form__input-label(for='link') Ссылка
                        br
                        input#link.form__input-input(type='text', name='sitelink', value='', placeholder='https://www.porsche-pulkovo.ru', required='')
                      p.form__input
                        label.form__input-label(for='message') Описание
                        br
                        textarea#message.form__input-text(name='message', rows='5', placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей', required='')
                      p.form__input
                        label.form__input-label(for='tags') Добавление тега
                        br
                        input#tags.form__input-input(type='text', name='tags', value='', placeholder='Jquery, Vue.js, HTML5', required='')
                      .form__tags
                        button.form__tags-btn(type='button') HTML
                        button.form__tags-btn(type='button') CSS
                        button.form__tags-btn(type='button') Javascript
                      .form__btns
                        button.form__btn.form__btn--no(type='submit') Отмена
                        button.form__btn.button(type='submit') Сохранить
          .container
            ul.portfolio__new-list
              li.portfolio__add-item
                button.portfolio__add-btn(type='button') +
                p.portfolio__add-note Добавить работу
              li.portfolio__new-item
                .portfolio__new-preview
                  .portfolio__new-img
                    img.portfolio__new-pic(src='')
                  ul.portfolio__new-tags
                    li.portfolio__new-tag HTML
                    li.portfolio__new-tag CSS
                    li.portfolio__new-tag Javascript
                  .portfolio__new-info.container
                    h3.portfolio__new-info-title Сайт школы образования
                    p.portfolio__new-info-text
                      | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    p.portfolio__new-info-link http://loftschool.ru
                    .portfolio__new-btns
                      button.portfolio__new-btn(type='button') Править
                      button.portfolio__new-btn(type='button') Удалить
      section.reviews.section
        .reviews.section-main
          .container
            ul.reviews__list.section__list.container
              li.reviews__item.section__item
                .reviews__item-header.section__item-header.container--item
                  h3.reviews__item-title.section__item-title Новый отзыв
                .reviews__item-main.container--item
                  .reviews__upload
                    .reviews__upload-img
                    button.reviews__upload-btn(type='button') Добавить фото
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
                        button.form__btn.form__btn--no(type='submit') Отмена
                        button.form__btn.button(type='submit') Сохранить
          .container
            ul.reviews__new-list
              li.reviews__add-item
                button.reviews__add-btn(type='button') +
                p.reviews__add-note Добавить отзыв
              li.reviews__new-item
                .reviews__new-header
                  .reviews__new-img
                    img.reviews__new-pic(src='')
                  .reviews__new-pers
                    p.reviews__new-name Владимир Сабанцев
                    p.reviews__new-pos Преподаватель
                .reviews__new-info.container
                  h3.reviews__new-info-title Сайт школы образования
                  p.reviews__new-info-text
                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .reviews__new-btns
                    button.reviews__new-btn(type='button') Править
                    button.reviews__new-btn(type='button') Удалить
    footer
</template>

<style lang='pcss'>
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    color: #414c63;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
  .header__wrapper {
    min-height: 80px;
    background-color: #414164;
  }
  .header__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__user-info {
    display: flex;
    margin-top: 20px;
  }
  .header__user-ava {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .header__user-name {
    font-size: 18px;
    color: #ffffff;
  }
  .header__panel {
    margin-left: 30px;
    font-size: 14px;
    color: #ffffff;
  }
  .header__login-btn {
    color: #ffffff;
    background-color: transparent;
    border: none;
  }

  .nav__list {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nav__item {
    padding: 30px;
  }

  .nav__link {
    font-size: 16px;
    color: #414c63;
    text-decoration: none;
  }

  .section {
    background-color: #f6f9fe;
    padding-bottom: 60px;
  }
  .section__header{
    display: flex;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .section__title {
    display: block;
    width: 17%;
    margin: 0;
    padding: 0;
    margin-top: 60px;
    font-size: 21px;
    font-weight: 900;
  }

  .about__add {
    display: block;
    width: 17%;
    margin: 0;
    padding: 0;
    margin-top: 60px;
    margin-left: 30px;
    vertical-align: middle;
    font-size: 16px;
    color: #383bcf;
  }

  .section__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .container--skill {
    width: 90%;
    margin: 0 auto;
  }
  .container--item {
    width: 95%;
    margin: 0 auto;
  }
  .button {
    padding: 18px 50px;
    background-color: #1d52dd;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    border-radius: 25px;
  }

  .section__item {
    display: flex;
    flex-direction: column;
    width: 48.6%;
    padding-bottom: 35px;
    background-color: #ffffff;
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  }

  .section__item-header {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
  }
  .section__item-title {
    font-size: 18px;
    font-weight: 900;
  }
  .new-skill__header-title.section__item-title {
    display: block;
    font-size: 18px;
    font-weight: 300;
  }
  .new-skill__footer {
    align-self: flex-end;
    width: 55%;
    margin-top: auto;
    margin-right: 100px;
  }
  .new-skill__footer-table {
    border: 0;
    border-spacing: 10px;
  }
  .new-skill__footer-td1 {
    border: 0;
  }
  .new-skill__footer-td1 {
    margin-right: 10px;
    padding: 10px 100px 10px 20px;
    border-bottom: 1px solid grey;
  }
  .new-skill__footer-td2 {
    padding: 10px 20px;
    border-bottom: 1px solid grey;
  }
  .new-skill__main-table {
    width: 100%;
  }
  .new-skill__main-td1 {
    width: 70%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .new-skill__main-td2 {
    width: 20%;
  }
  .new-skill__main-td3 {
    width: 10%;
  }

  .portfolio__item {
    width: 100%
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
    margin-top: 85px;
    margin-bottom: 30px;
  }

  .portfolio__desc {
    width: 50%;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form__input-input,
  .form__input-text {
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 1px solid grey;
  }

  .form__input-text {
    margin: 0;
    padding: 0;
    margin-top: 30px;
    padding-top: 10px;
    resize: none;
    border: 1px solid lightgrey;
  }
  .form__tags,
  .form__btns {
    display: flex;
  }
  .form__tags-btn {
    margin-right: 10px;
    padding: 5px 30px 5px 10px;
    background-color: #f4f4f4;
    border: none;
    border-radius: 20px;
  }
  .form__btns {
    align-self: flex-end;
  }
  .form__btn--no {
    margin-right: 60px;
    font: inherit;
    background-color: transparent;
    color: #1d52dd;
    border: none;
  }
  .portfolio__new-list,
  .reviews__new-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    list-style: none;
  }
  .portfolio__add-item,
  .reviews__add-item {
    width: 32%;
    text-align: center;
    background-color: #1d52dd;
  }

  .portfolio__add-btn,
  .reviews__add-btn {
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: transparent;
    font-size: 34px;
    color: #ffffff;
  }
  .portfolio__add-note,
  .reviews__add-note {
    color: #ffffff;
  }
  .portfolio__new-item,
  .reviews__new-item {
    width: 30%;
    margin-left: 30px;
    margin-right: auto;
    padding-bottom: 60px;
    background-color: #ffffff;
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  }

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
  .portfolio__new-btns,
  .reviews__new-btns {
    display: flex;
    justify-content: space-between;
  }
  .portfolio__new-btn,
  .reviews__new-btn {
    padding-right: 40px;
    font: inherit;
    font-size: 16px;
    font-weight: 300;
    color: #818181;
    background-color: transparent;
    border: none;
  }
  .portfolio__new-info-title,
  .reviews__new-info-title {
    margin: 30px 0;
    font-size: 18px;
    font-weight: 900;
  }

  .portfolio__new-info-text,
  .reviews__new-info-text {
    font-weight: 300;
    line-height: 30px;
    color: #818181;
  }
  .portfolio__new-info-link {
    margin: 30px 0;
    color: #1d52dd;
  }
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
  .form--rev {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  .form__input--rev {
    width: 48%;
  }
  .form__input--area {
    width: 100%;
  }

  .form__btns--rev {
    margin-left: auto;
  }


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
