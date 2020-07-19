<template>
    <div class="top">

        <music-list :infrom="TopList" class="music-list">
            <div class="text">全球榜</div>
        </music-list>
    </div>
</template>

<script>
    import {_getTop} from "../../../network/dircoverMusic";
    import musicList from "../../../components/content/musiclist/musicList";

    export default {
        name: "Top",
        data(){
            return{
                TopList:[]
            }
        },
        components:{
            musicList
        },
        created() {
            this.getTop()
        },
        methods:{
            //获取排行榜数据
            getTop() {
                _getTop().then(res =>{
                    this.TopList = res.list;
                })
            }
        }
    }
</script>

<style scoped>
    .top {
        background-color: #16181c;
        width: calc(100% - 200px);
        position: relative;
        margin: auto;
    }
    .text {
        color: white;
        text-align: left;
        margin-bottom: 20px;
        font-size: 24px;
    }
    .music-list {
        width: 1000px;
        position: relative;
        margin: auto;
        margin-top: 30px;
        height: 100%;
        padding-bottom: 50px;
    }
</style>