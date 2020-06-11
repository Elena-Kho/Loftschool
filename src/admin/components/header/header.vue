<template lang="pug">
  header.header
    .header__wrapper
      .header__user.container
        .header__user-info
          .header__user-ava
            img.header__user-img(:src='require(`images/content/user.jpg`)')
          .header__user-name Елена Ходанович
        .header__panel Панель администрирования
        .header__login
          button.header__login-btn(type='button' @click.prevent='logoutUser') Выйти
</template>


<script>
  import { mapActions } from 'vuex'

  export default {
    components: {

    },
    data() {
      return {

      }
    },
    methods: {
      ...mapActions('user', ['logout']),
      logoutUser() {
        this.logout();
        this.$router.replace('/login')
      }
    },
  }
</script>


<style lang='pcss' scoped>
  .header__wrapper {
    min-height: 80px;
    background-color: #414164;
  }
  .header__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  .header__user-info {
    display: flex;
    align-items: center;
  }
  .header__user-ava {
    width: 45px;
    height: 45px;
    margin-right: 20px;
  }
  .header__user-img {
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
    display: block;
    color: #ffffff;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    .header__user {
      flex-direction: column;
      align-items: flex-start;
    }
    .header__panel {
      display: none;
    }
    .header__login-btn {
      margin-left: 60px;
      margin-top: -10px;
    }
  }
</style>
