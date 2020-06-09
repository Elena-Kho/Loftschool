<template lang="pug">
  main.main
    nav.main__nav.nav
      ul.nav__list.container
        li.nav__item
          router-link(
            tag='a',
            class='nav__link',
            to='/'
          ) Обо мне
        li.nav__item
          router-link(
            tag='a',
            class='nav__link',
            to='/portfolio'
          ) Работы
        li.nav__item
          router-link(
            tag='a',
            class='nav__link',
            to='/reviews'
          ) Отзывы
    .main__block
      router-view
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
  .nav__list {
    display: flex;
    padding: 0;
    list-style: none;
  }

  .nav__item {
    padding: 30px;
  }

  .nav__link {
    font-size: 16px;
    color: #414c63;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #383bcf;
      border-bottom: 1px solid #383bcf;
    }
  }
  @media screen and (max-width: 479px) {
    .nav__item {
      padding: 30px 14px;
    }
  }
</style>
