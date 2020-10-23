<template>
  <div id="myhead">
      <div class="head1"> 
      <div class="head11"><i class="iconfont">&#xe603;</i></div>
      <div class="head22">密码管理</div>
      </div>
      <div class="head2">
      <div class="head11"><i class="iconfont">&#xe634;</i></div>
      <div class="head22">银行卡管理</div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Myhead",
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
    #myhead{
      margin-top: 49px;
        height: 100px;
        display: flex;
        border-bottom: solid 1px #ccc;
    }
    #myhead>div{
        flex: 1;
        text-align: center;
        /* line-height:100px ; */
    }
    .head1,.head2{
        font-size: 22px;
    }
    .iconfont{
        font-size: 33px!important;
    }
    .head11,.head22{
        margin-top: 10px;
    }
    .head11{
        color: greenyellow;
    }
</style>