<template>
  <swiper>
    <swiper-item >
      <a >
        <img src="../../../assets/img/Home/img/01.jpg" alt="">
      </a>
    </swiper-item>
    <swiper-item >
      <a >
        <img src="../../../assets/img/Home/img/02.jpg" alt="">
      </a>
    </swiper-item>
    <swiper-item >
      <a >
        <img src="../../../assets/img/Home/img/03.jpg" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    // props: {
    //   banners: {
    //     type: Array,
    //     default() {
    //       return []
    //     }
    //   }
    // },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>