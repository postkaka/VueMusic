<template>
    <div class="tab-bar">
        <el-menu background-color="#16181c" text-color="#828485" mode="horizontal" router >
            <el-menu-item v-for="(item,index) in list" :key="item.id" class="item" :index="item.path"
            ><span>{{item.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "tabBar",
        data() {
            return{
                list:[
                    {path:'/dircovr/dircovrMusic',name:'个性推荐'},
                    {path:'/dircovr/songMenu',name:'歌单'},
                    {path:'/dircovr/top',name:'排行榜'},
                    {path:'/dircovr/singer',name:'歌手'},
                    {path:'/dircovr/newSongs',name:'最新音乐'},
                    {path:'/dircovr/radio',name:'热门电台'}
                    ]
            }
        }
    }
</script>

<style scoped>
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .item {
        margin-left: 10px;
        margin-right: 10px;
    }
    .active span {
        border-bottom: 2px solid #404245;
    }
</style>