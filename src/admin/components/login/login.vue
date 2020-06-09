<template lang="pug">
  .login(v-if='activeLog')
    .login__wrapper
      button.form-login__button-log(type='button' @click.prevent='activeForm = true') Авторизоваться
      form.login__form.form-login(v-if='activeForm == true' @submit.prevent='login')
        button.form-login__button-close(type='button' @click.prevent='activeForm = false')
        h2.form-login__heading Авторизация
        label.form-login__label
          span.form-login__input-text Логин
          input.form-login__input.form-login__input--log(type='text' placeholder='Введите логин' required v-model='user.name')
        label.form-login__label
          span.form-login__input-text Пароль
          input.form-login__input.form-login__input--pass(type='password' placeholder='Введите пароль' required v-model='user.password')
        button.form-login__button-send(type='submit') Авторизоваться
</template>


<script>
  import axios from 'axios'

  const baseURL = 'https://webdev-api.loftschool.com';
  const token = localStorage.getItem('token') || '';

  axios.defaults.baseURL = baseURL
  axios.defaults.headers['Authorization'] = `Bearer ${token}`

  export default {
    components: {
    },
    data() {
      return {
        activeLog: true,
        activeForm: false,
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if (this.validForm()) {
          try {
            axios.post(baseURL + '/login', this.user).then(response => {
              const token = response.data.token;

              axios.defaults.headers['Authorization'] = `Bearer ${token}`
              localStorage.setItem('token', token);

              this.$router.replace('/')
            })
          }
          catch(error) {
            console.log(error.message)
          }
        this.activeLog = false;
      }
    },
      validForm() {
        if (!this.user.name || !this.user.password) {
          return false
        } else {
          return true
        }
      },
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
  .form-login__button-close {
    align-self: flex-end;
    width: 15px;
    height: 15px;
    margin-right: 50px;
    background: svg-load('remove.svg', width: 12, height: 12, fill: grey) no-repeat 0 0;
  }
  .form-login__button-send {
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
  .form-login__button-log {
    position: fixed;
    top: 40%;
    left: 40%;
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

  @media screen and (max-width: 767px) {
    .form-login__button-log {
      left: 20%;
      padding: 15px 60px;
      font-size: 12px;
    }
    .form-login {
      left: 50%;
      width: 320px;
      margin-left: -160px;
    }
    .form-login__heading {
      font-size: 24px;
    }
    .form-login__input {
      width: 200px;
    }
    .form-login__button-send {
      padding: 15px 60px;
      font-size: 12px;
    }
  }
</style>
