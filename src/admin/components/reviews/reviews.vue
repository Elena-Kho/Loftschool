<template lang="pug">
  section.reviews.section
    .container
      .reviews__header.section__header.container--block
          h2.reviews__title.section__title Блок Отзывы
      .reviews.section-main
        ul.reviews__list.section__list.container
          li.reviews__item.section__item(v-if='ShowAddBlock')
            reviewsAddComp(
            @toggleShow='toggleShow'
            @addReview='addReview'
            )
          li.reviews__item.section__item(v-if='ShowEditBlock')
            reviewsEditComp(
            :reviewToEdit='reviewToEdit'
            @toggleShowEdit='toggleShowEdit'
            @editReview='editReview'
            )
        ul.reviews__new-list.section__new-list
          li.reviews__add-item.section__add-item
            button.reviews__add-btn.section__add-btn(type='button' @click.prevent='toggleShow') +
            p.reviews__add-note.section__add-note Добавить отзыв
          li.reviews__new-item.section__new-item(v-for='review in reviews' :key='review.id')
            reviewsItemComp(
            :review='review'
            @delReview='delReview'
            @getReviewToEdit='getReviewToEdit'
            )
</template>


<script>
  import axios from 'axios'
  import reviewsAddComp from './reviewsAdd'
  import reviewsEditComp from './reviewsEdit'
  import reviewsItemComp from './reviewsItem'
  import requests from '../../requests'

  export default {
    components: {
      reviewsAddComp,
      reviewsEditComp,
      reviewsItemComp
    },
    data() {
      return {
        ShowAddBlock: false,
        ShowEditBlock: false,
        reviews: [],
        reviewToEdit: {}
      }
    },
    created() {
      this.getReviews();
    },
    methods: {
      toggleShow() {
        this.ShowAddBlock = !this.ShowAddBlock
      },
      toggleShowEdit () {
        this.ShowEditBlock = !this.ShowEditBlock
      },
      addReview(formData){
        requests.post('/reviews', formData).then(response => {
          this.reviews.unshift(response.data)
        })
        this.ShowAddBlock = false
      },
      getReviews() {
        requests.get('/reviews/339').then(response => {
          this.reviews = response.data
        })
      },
      delReview(ReviewID) {
        requests.delete(`/reviews/${ReviewID}`).then(response => {
          this.reviews = this.reviews.filter(review => review.id !== ReviewID)
        })
      },
      getReviewToEdit(review) {
        this.ShowEditBlock = !this.ShowEditBlock
        this.reviewToEdit = this.reviews.find(item => item.id == review.id)
      },
      editReview(sendData) {
        requests.post(`/reviews/${sendData.id}`, sendData.data).then(response => {
          this.reviews = this.reviews.map(review => {
            if(review.id == response.data.review.id) {
              review = response.data.review
            }
            return review;
          })
        })
        this.ShowEditBlock = false;
      },
    }
  }
</script>


<style lang='pcss' scoped>
  .reviews__item {
    width: 100%;
  }
</style>
