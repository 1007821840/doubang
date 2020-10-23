<template>
  <div id="newteam">
      <div v-for="(it,index) in good" class="new1">
          <div class="new2">{{it.title}}</div>
          <new-teams :item="it"/>
          <div class="new3">更多相关小组</div>
          
      </div>
  </div>
</template>

<script>
    
    import NewTeams from './NewTeams.vue'
export default {
  name:"NewTeam",
  props:{
      good:{
          type:Array
      }
  },
  data () {
    return {
      
    };
  },
  components: {
    NewTeams,
    
  },
  mounted () {},
  methods: {
    
  }
}
</script>
<style scoped>
    .new1{
        padding-top: 50px;
    }
    .new2{
      font-size: 22px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .new3{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: chartreuse;
      font-size: 18px;
    }
    
  
</style>