<template>
  <div>
    <nav-bar class="sy-nav">
      <div slot="left">
        <div class="left-1">
          我的
        </div>
      </div>
      <div slot="right">
        <img class="home-img3" src="../../assets/img/Mine/img/ic_settings.png">
      </div>
    </nav-bar>
   <myhead/>
   <myfoot :list-data=" orderList"/>
  </div>
</template>

<script>
    import Myhead from './childConps/Myhead.vue'
    import Myfoot from './childConps/Myfoot.vue'
  import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name:"My",
  data () {
    return {
      orderList: [
			    {icon: "e604", info: '风险承受能力评估'},
			    {icon: 'e60f;', info: '安全保障'},
			    {icon: 'e629;', info: '我的关注'},
			    {icon: 'e673;', info: '帮助中心'},
			    {icon: 'e629;', info: '关于我们'},
			    {icon: 'e621;', info: '检查更新'},
			    {icon: 'e622;', info: '联系客服'},
		    ],
      
    };
  },
  components: {
      NavBar,
      Myhead,
      Myfoot
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
  @import '../../assets/font_ubo4oxo1cgwg66r/iconfont.css';
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