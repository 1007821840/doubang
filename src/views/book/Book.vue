<template>
  <div>
    <nav-bar class="sy-nav">
      <div slot="left">
        <div class="left-1">书影音</div>
      </div>
      <div slot="center">
        <img class="home-img3" src="../../assets/img/Group/img/ic_actionbar_search_icon.png">
      </div>
      <div slot="right">
        <img class="home-img3" src="../../assets/img/Group/img/ic_chat_green.png">
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name:"Book",
  data () {
    return {
      
    };
  },
  components: {
    NavBar
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
  .home-img3{
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }
  .left-1{
    display: inline-block;
    margin-left: 100px;
  }
  .sy-nav {
    background-color:#efefef;
    color: black;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>