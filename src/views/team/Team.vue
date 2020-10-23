<template>
  <div>
    <nav-bar class="sy-nav">
      <div slot="left">
        <div class="left-1">小组</div>
      </div>
      <div slot="center">
        <img class="home-img3" src="../../assets/img/Group/img/ic_actionbar_search_icon.png">
      </div>
      <div slot="right">
        <img class="home-img3" src="../../assets/img/Group/img/ic_chat_green.png">
      </div>
    </nav-bar>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <new-team :good="goods"/>
    </scroll>
  </div>
</template>

<script>
   import Scroll from '@/components/common/scroll/Scroll'
   import { getSYgoods } from '@/network/home.js'
  import NewTeam from './childComps/NewTeam.vue'
  import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name:"Team",
  data () {
    return {
      goods:[]
      
    };
  },
  components: {
    NavBar,
    NewTeam,
    Scroll
  },
  created(){
    getSYgoods().then(res => {
        //  console.log(res.recommend_feeds);
        this.goods=res.group
       
         console.log(this.goods);
    })

  },
  mounted () {},
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
 .sy-nav {
  background-color:#efefef;
    color: black;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .left-1{
    display: inline-block;
    margin-left: 100px;
  }
  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .wrapper {
    position: absolute;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>