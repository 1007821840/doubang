<template>
  <div>
      <div v-for="(it,index) in mult" class="mult">
          <div class="mult1">
          <div class="mult1-1">{{it.title}}</div>
          <div class="mult1-2">{{it.target.desc}}</div>
          <div class="mult1-3">作者:{{it.target.author.name}}</div>
          </div>
          <div class="mult2">
              <div class="mult2-1">
                <img :src="it.target.cover_url">
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"HomeMain",
  props:{
      mult:{
          type:Array

      }

  },
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
    .mult{
        width: 100%;
        border-bottom: 1px solid #cccc;
        display: flex;
    }
    .mult img{
        width: 100%;
        height: 100%;
    }
    .mult1{
        flex: 2;
        margin: 15px 8px 15px;
    }
    .mult2{
        flex: 1;
    }
    .mult1-1{
        margin-top: 8px;

    }
    .mult1-3,.mult1-2{
        margin-top: 8px;
        color: #cccc;
    }
    .mult2-1{
        margin-top: 18px;
        margin-right: 10px;
      
       
    }
    
    
</style>