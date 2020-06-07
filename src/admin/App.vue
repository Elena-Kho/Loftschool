<template lang="pug">
  .wrap-admin
    headerComp
    mainComp
</template>

<script>
  import headerComp from './components/header/header'
  import mainComp from './components/main/main'

  export default {
    components: {
      headerComp,
      mainComp
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang='pcss'>
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    color: #414c63;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    font: inherit;
    border: none;
  }

  input[type="file" i] {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .button {
    padding: 18px 50px;
    background-color: #1d52dd;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }
  .container--block {
    width: 100%;
    margin: 0 auto;
  }
  .container--skill {
    width: 90%;
    margin: 0 auto;
  }
  .container--header,
  .container--item {
    width: 95%;
    margin: 0 auto;
  }

  .section {
    background-color: #f6f9fe;
    padding-bottom: 155px;
  }
  .section__header{
    display: flex;
    align-items: center;
  }
  .section__title {
    display: block;
    padding: 0;
    margin-bottom: 0;
    margin-top: 60px;
    margin-right: 60px;
    font-size: 21px;
    font-weight: 900;
  }
  .section__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
    padding-top: 50px;
    list-style: none;
  }

  .section__item {
    width: 48.6%;
  }

  .section__item-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
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
  .section__item-btn {
    width: 15px;
    height: 15px;
    margin-left: 20px;

    &--tick {
      background: svg-load('tick.svg', width: 15, height: 15, fill: lime) no-repeat 0 0;
    }

    &--remove {
      background: svg-load('remove.svg', width: 12, height: 12, fill: red) no-repeat 0 0;
    }

    &--pencil {
      background: svg-load('pencil.svg', width: 15, height: 15, fill: grey) no-repeat 0 0;
    }

    &--trash {
      background: svg-load('trash.svg', width: 15, height: 15, fill: grey) no-repeat 0 0;
    }
  }

  .section__footer-item,
  .section__footer-percent {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    border-bottom: 1px solid grey;
  }

  .section__footer-item {
    width: 50%;
  }

  .section__footer-percent {
    width: 15%;
  }

  .section__footer-btn {
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    margin-left: 30px;
    font-size: 26px;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 50%;
    background-color: #383bcf;
    cursor: pointer;
  }
  .section__new-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }
  .section__add-item {
    width: 30%;
    margin-bottom: 30px;
    padding-bottom: 50px;
    text-align: center;
    background-color: #1d52dd;
  }
  .section__add-btn {
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
  .section__add-note {
    color: #ffffff;
  }
  .section__new-item {
    width: 30%;
    margin-bottom: 30px;
    padding-bottom: 60px;
    background-color: #ffffff;
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  }
  .section__new-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .section__new-btn {
    display: block;
    width: 34%;
    font: inherit;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    color: #818181;
    background-color: transparent;
    border: none;

    &--trash {
      background: svg-load('trash.svg', width: 12, height: 12, fill: grey) no-repeat 78px 6px;
    }

    &--pencil {
      background: svg-load('pencil.svg', width: 15, height: 15, fill: #1d52dd) no-repeat 78px 4px;
    }
  }
  .section__new-info-title {
    margin: 30px 0;
    font-size: 18px;
    font-weight: 900;
  }
  .section__new-info-text {
    font-weight: 300;
    line-height: 30px;
    color: #818181;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .form__input-input,
  .form__input-text {
    width: 100%;
    font: inherit;
    font-weight: 500;
    color: #414c63;
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
  .form__input-label {
    color: #818181;
  }

  .form__tags,
  .form__btns {
    display: flex;
  }

  .form__tags {
    margin-top: 20px;
  }

  .form__tag {
    margin-right: 10px;
  }

  .form__tag-btn {
    padding: 5px 35px 5px 15px;
    border: none;
    border-radius: 20px;
    font: inherit;
    text-transform: uppercase;
    text-align: left;
    color: #414c63;
    background:#f4f4f4 svg-load('remove.svg', width: 10, height: 10, fill: grey) no-repeat 90% 5px;
  }

  .form__btns {
    align-self: flex-end;
    margin-top: 40px;
  }
  .form__btn--no {
    margin-right: 60px;
    font: inherit;
    background-color: transparent;
    color: #1d52dd;
    border: none;
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

  @media screen and (max-width: 1199px) {
    .container--item {
      width: 75%;
    }
    .section__add-item,
    .section__new-item {
      width: 48%;
    }

    .form__btns {
      align-self: center;
    }
  }

  @media screen and (max-width: 767px) {
    .section__header {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .section__item {
      width: 100%;
    }
    .container {
      width: 100%;
    }
    .container--block {
      width: 90%;
    }
    .container--item {
      width: 90%;
    }
    .section__add-item,
    .section__new-item {
      width: 100%;
    }
    .form__input--rev {
      width: 100%;
    }
  }
  @media screen and (max-width: 479px) {
    .section__footer-item {
      width: 45%;
    }

    .section__footer-percent {
      width: 20%;
    }
  }
</style>
