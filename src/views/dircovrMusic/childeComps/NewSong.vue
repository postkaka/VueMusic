<template>
    <div class="new-song">
        <div class="text">最新音乐</div>
        <template class="song">
            <div v-for="(item,index) in newSongList" :key="index" class="song-list" @click="clickSongs(item.id)">
                <div class="frist-span">{{index + 1}}</div>
                <img :src="item.picUrl" alt="">
               <div class="infrom">
                   <div class="name">{{item.name}}</div>
                   <div class="company">{{item.song.album.company}}</div>
               </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "NewSong",
        data() {
          return{
              songID:null
          }
        },
        props: {
            newSongList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            clickSongs(id){
                this.songID = id;
                this.$emit("clickSongs",id)
            }
        }
    }
</script>

<style scoped>
    .text {
        color: white;
        font-size: 24px;
        width: 1000px;
        border-bottom: 2px solid white;
        margin-bottom: 10px;
    }
    .frist-span {
        display: inline-block;
        position: relative;
        top: -40%;
        margin-right: 20px;
        color: white;
        width: 20px;
    }
    .song {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .song-list {
        display: inline-block;
        width: 50%;
        height: 100px;
        margin-bottom: 30px;

    }
    .song-list img {
        height: 100px;
        width: 100px;
    }
    .infrom {
        display: inline-block;
        position: relative;
        top: -15%;
        margin-left: 20px;
        line-height: 50px;
        color: white;
    }
    .name {
        margin-bottom: 10px;
    }
</style>