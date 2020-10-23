<template>
    <div>
        <div v-for="(item, index) in listData" :key="index" class="item">
            <div class="item1">
            <i class="iconfont">
                {{String.fromCharCode(parseInt(item.icon,16))}}
            </i>
            </div>
            <div class="info">{{item.info}}</div>
            <div class="item2">
            <i class="iconfont">&#xe630;</i>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Myfoot",
        props: {
            listData: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {

            };
        },
        components: {
        },
        mounted() { },
        methods: {}
    }
</script>
<style scoped>
    @import '../../../assets/font_ubo4oxo1cgwg66r/iconfont.css';
    .item{
        display: flex;
        height: 60px;
        border-bottom: 1px solid #cccccc;
        font-size: 22px!important;
        line-height: 60px;
        
    }
    .iconfont{
        font-size: 22px!important;
        color: greenyellow;
    }
    .item1,.item2{
        flex: 1;
        text-align: center;
    }
    .info{
        flex: 6;
    }
</style>