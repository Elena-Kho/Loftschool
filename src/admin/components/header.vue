<template lang="pug">
  header.header
    .header__wrapper
      .header__user.container
        .header__user-info
          .header__user-ava
            img.header__user-img(src='')
          .header__user-name Елена Ходанович
        .header__panel Панель администрирования
        .header__login
          button.header__login-btn(type='button') Выйти
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
</style>
