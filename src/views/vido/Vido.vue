<template>
  <div>
    <nav-bar class="sy-nav">
      <div slot="left">
        <div class="left-1">广播</div>
      </div>
      <div slot="center">
        <img class="home-img3" src="../../assets/img/Broadcast/img/ic_status_search_user.png">
      </div>
      <div slot="right">
        <img class="home-img3" src="../../assets/img/Group/img/ic_chat_green.png">
      </div>
    </nav-bar>
    <nav-bars class="sy-navs">
      <div slot="left1">
        <div><i class="iconfont">&#xe502;</i></div>
      </div>
      <div slot="center1">
        <div>登录发广播</div>
      </div>
    </nav-bars>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <vido-goods/>
    </scroll>
  </div>
</template>

<script>
 import Scroll from '@/components/common/scroll/Scroll'
  import VidoGoods from './childComps/VidoGoods'
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import NavBars from '@/components/common/navbar/NavBars.vue'
export default {
  name:"Vido",
  data () {
    return {
      
    };
  },
  components: {
    NavBar,
    NavBars,
    VidoGoods,
    Scroll
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
  @import '../../assets/font_05aq15ta8ku4/iconfont.css';
  .iconfont{
    font-size: 35px!important;
  }
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
  .sy-navs {
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;
    z-index: 9;
  }
  .wrapper {
    position: absolute;
    top: 115px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
     

</style>