<template lang="pug">
  .login(v-if='activeForm')
    .login__wrapper
      form.login__form.form-login(@submit.prevent='login')
        h2.form-login__heading Авторизация
        label.form-login__label
          span.form-login__input-text Логин
          input.form-login__input.form-login__input--log(type='text' placeholder='Введите логин' required v-model='user.name')
        label.form-login__label
          span.form-login__input-text Пароль
          input.form-login__input.form-login__input--pass(type='password' placeholder='Введите пароль' required v-model='user.password')
        button.form-login__button(type='submit') Авторизоваться
</template>


<script>
  import axios from 'axios'

  const baseUrl = 'https://webdev-api.loftschool.com';
  const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA2ODU4MzMsImV4cCI6MTU5MDcwMzgzMywibmJmIjoxNTkwNjg1ODMzLCJqdGkiOiJCc0l3MDdDSzJKb3VoSzNlIn0.-1-wi4bLpbdhHGEyX5eNapgZTXLXlRJsa_dE02oqpSs'

  export default {
    components: {

    },
    data() {
      return {
        activeForm: false,
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        axios.post(baseUrl +'/login', this.user).then(response => {
          console.log(response.data)
        }).catch(error => {
            console.log(error.response.data)
          })
      }
    }
  }
</script>


<style lang='pcss' scoped>
  .login__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .form-login {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 560px;
    height: 345px;
    top: 30%;
    left: 50%;
    margin-left: -265px;
    padding: 0;
    padding-top: 60px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .form-login__heading {
    display: block;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    font-size: 36px;
  }
  .form-login__input-text {
    display: block;
    font-size: 12px;
    color: lightgrey;
    padding-left: 50px;
    text-align: left;
  }
  .form-login__input {
    width: 340px;
    border-bottom: 1px solid grey;
    padding-left: 50px;
    text-align: left;

    &--log {
      background: svg-load('user.svg', width: 25, height: 25, fill: #c9cbd3) no-repeat 0 0;
    }

    &--pass {
      background: svg-load('key.svg', width: 25, height: 25, fill: #c9cbd3) no-repeat 0 0;
    }
  }
  .form-login__button {
    margin-top: 30px;
    padding: 30px 100px;
    border-radius: 40px 5px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background: linear-gradient(to right, #bb00ff, #5900ff);

    &:hover {
      background: linear-gradient(to right, #5900ff, #bb00ff);
    }
  }

</style>
