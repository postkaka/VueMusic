<template>
    <div>
        <el-menu background-color="#16181c" text-color="#828485" mode="horizontal">
            <el-menu-item v-for="(item,index) in list" :key="item.id" class="item"
            :class="{active: index === currentIndex}" @click="itemClick(index)"
            ><span>{{item}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "tabBar",
        data() {
            return{
                list:["个性推荐","歌单","排行榜","歌手","最新音乐","主播电台"],
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .item {
        margin-left: 10px;
        margin-right: 10px;
    }
    .active span {
        margin-top: 40px;
        border-bottom: 2px solid #404245;
    }
</style>