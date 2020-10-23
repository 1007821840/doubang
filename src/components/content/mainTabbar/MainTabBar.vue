<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="item-text1"><i class="iconfont">&#xe691;</i></div>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/book">
      <div slot="item-text1"><i class="iconfont">&#xe61e;</i></div>
      <div slot="item-text">书影城</div>
    </tab-bar-item>
    <tab-bar-item path="/vido">
      <div slot="item-text1"><i class="iconfont">&#xe646;</i></div>
      <div slot="item-text">广播</div>
    </tab-bar-item>
    <tab-bar-item path="/team">
      <div slot="item-text1"><i class="iconfont">&#xe621;</i></div>
      <div slot="item-text">小组</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <div slot="item-text1"><i class="iconfont">&#xe665;</i></div>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  @import "../../../assets/font_im0c4r27fxn/iconfont.css";
.iconfont{
  font-size: 22px!important;
}
</style>