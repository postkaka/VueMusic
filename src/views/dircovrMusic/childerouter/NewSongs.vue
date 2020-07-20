<template>
    <div class="new-songs">
        <div class="tab">
           <div class="_tab">
               <div v-for="(item,index) in type" :key="index" class="text">{{item}}</div>
           </div>
            <div class="play">
                <img src="../../../assets/img/playmusic/rebofang.svg" alt="">
                <span>播放全部</span>
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
                type:["全部","华语","欧美","韩国","日本"],
                songList:[]
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
                    console.log(this.songList);
                })
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
        border-bottom: 1px solid grey;
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
    }
    .play img{
        height: 28px;
        width: 28px;
    }
    .play span {
        color: white;
        position: relative;
        margin: auto;
    }
    .new-songs-list {
        width: 1000px;
        position: relative;
        margin: auto;
        margin-top: 20px;
        height: 100%;
        padding-bottom: 50px;
    }
</style>