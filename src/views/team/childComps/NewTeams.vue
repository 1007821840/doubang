<template>
  <div>
      <div v-for="it in item.group_list" class="teamss">
        <div class="teams">
          <div class="teams1">
              <img :src="it.img_url">
          </div>
          <div class="teams3">{{it.group_name}}</div>
          <div class="teams2">{{it.group_member}}</div>
        </div>
          <div class="teams4">{{it.topic_title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name:"NewTeams",
  props:{
      item:{
          type:Object
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
  .teams{
    line-height: 100px;
    display: flex;
    width: 100%;
    height: 100px;
   
  }
  .teams1{
    margin-left: 10px;
    width: 60px;
    height: 60px;
  }
  .teams1 img{
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
  .teams3{
    white-space:nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 10px;
    font-size: 20px;
    flex: 5;
  }
  .teams2{
    white-space:nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
    color: #cccccc;
    flex: 1;
  }
  .teams4{
    margin-left: 10px;
    color: #cccccc;
    white-space:nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .teamss{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #ccc;
  }
</style>