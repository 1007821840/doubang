<template>
  <div id="Home">
    <nav-bar class="sy-nav">
      <div slot="left">
        <div class="home-head">
          <img src="../../assets/img/Home/img/ic_group_search_small.png">
        <input type="tel" value="影视 图书 唱片 小组等" class="home-inp">
        <img id="home-img2" src="../../assets/img/Home/img/ic_scan_gray.png">
        </div>
      </div>
      <div slot="right">
        <img class="home-img3" src="../../assets/img/Home/img/ic_chat_white.png">
      </div>
    </nav-bar>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <home-swiper />
    <home-main :mult="mult"/>
    
  </scroll>
  </div>
</template>

<script>
  import HomeMain from './childComps/HomeMain'
  import { getSYMultidata } from '@/network/home.js'
  import Scroll from '@/components/common/scroll/Scroll'
  import HomeSwiper from './childComps/HomeSwipers'
  import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name:"Home",
  data () {
    return {
      mult:[]
      
      
    };
  },
  components: {
    HomeMain,
    Scroll,
    HomeSwiper,
    NavBar
  },
  created(){
    
        getSYMultidata().then(res => {
        //  console.log(res.recommend_feeds);
         this.mult=res.recommend_feeds;
         console.log(res);
        //  console.log(this.mult.title);
        //  console.log(this.mult[1].target);
         
        })
    

  },
  mounted () {
    
  },
  methods: {
    contentScroll(position) {
        // console.log(this.isShowBack);
        this.isFed=(-position.y)>this.tabOffsetTop;
        // (-position.y) > 1000 ? this.isShowBack = true : this.isShowBack = false;


      },
      loadMore() {
        // this.getSYgoods(this.currentType);
        this.$refs.scroll.scroll.refresh()
      },
  }
}
</script>
<style scoped>
  
 .home-img3{
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }
  #home-img2{
    margin-right: 10px;

  }
  .home-inp{
    border: none;
    outline: none;
    width: 78%;
    height: 30px;
    display: inline-block;
    margin-top: 3px;
   
   
  }
  .home-head img{
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-left: 8px;
    /* flex: 1; */
  }
  .home-head{
    margin-left: 8px;
    margin-top: 5px;
    display: flex;
    border-radius: 9px;
    width: 117%;
    height: 38px;
    background-color:#ffff;
  }
  #Home {
    height: 100vh;
    position: relative;
  }

  .sy-nav {
    
    background-color:#efefef;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .wrapper {
    position: absolute;
    top: 49px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>