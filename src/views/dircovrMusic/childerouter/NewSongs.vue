<template>
    <div class="new-songs">
        <div class="tab">
           <div class="_tab">
               <div v-for="(item,index) in type"
                    :key="index"
                    class="text"
                    :class="{active: currentIndex === item.index }"
                    @click="tabClick(item.index)"
                    >
                   {{item.name}}</div>
           </div>
            <div class="play">
                <img src="../../../assets/img/playmusic/rebofang.svg" alt="">
                <div>播放全部</div>
            </div>
        </div>
        <new-songs-list class="new-songs-list" :song-list="songList"></new-songs-list>
    </div>
</template>

<script>
    import NewSongsList from "../childeComps/NewSongsList";
    import {_getNewSongs} from "../../../network/dircoverMusic";

    export default {
        name: "NewSongs",
        data(){
            return{
                type:[
                    {name:"全部",index:0},
                    {name:"华语",index:7},
                    {name:"欧美",index:96},
                    {name:"日本",index:8},
                    {name:"韩国",index:16},
                    ],
                songList:[],
                currentIndex: 0
            }
        },
        components: {
            NewSongsList
        },
        created() {
            this.getNewSongs()
        },
        methods:{
            getNewSongs(type){
                _getNewSongs(type).then(res =>{
                   this.songList = res.data
                })
            },
            tabClick(index){
                this.currentIndex = index
                this.getNewSongs(this.currentIndex)
            }
        }
    }
</script>

<style scoped>
    .tab {
        position: relative;
        margin: auto;
        width: 1000px;
    }
    ._tab {
        border-bottom: 1px solid #282A2E;
        width: 1000px;
    }
    .text {
        color: white;
        display:inline-block;
        margin-bottom: 10px;
        margin-right: 10px;

    }
    .play {
        margin: auto;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
    }
    .play img{
        height: 28px;
        width: 28px;
    }
    .play div {
        color: white;
        height: 28px;
        line-height: 28px;
    }
    .new-songs-list {
        width: 1000px;
        position: relative;
        margin: auto;
        height: 100%;
        padding-bottom: 50px;
    }
    .active {
        color: red;
    }
</style>