<template>
    <div>
        <div class="text">最新音乐</div>
        <template class="song">
            <div v-for="(item,index) in newSongList" :key="index" class="song-list">
                <span class="frist-span">{{index + 1}}</span>
                <img :src="item.picUrl" alt="">
               <div class="infrom">
                   <div class="name">{{item.name}}</div>
                   <div>{{item.song.album.company}}</div>
               </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "NewSong",
        props: {
            newSongList: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .frist-span {
        height: 100px;
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
        line-height: 100%;
    }
    .song-list img {
        height: 100px;
        width: 100px;
    }
    .infrom {
        display: inline-block;
    }
</style>