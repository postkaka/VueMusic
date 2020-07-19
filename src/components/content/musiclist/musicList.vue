<template>
    <div>
        <slot></slot>
        <div class="recommend-list">
            <song-list :infrom="infrom" v-for="(item,index) in infrom" :key="index" class="song-list" >
                <img :src="item.coverImgUrl" @err="imgErr(item)" alt="">
                <div>{{item.name}}</div>
            </song-list>
        </div>
    </div>
</template>

<script>
    import SongList from "../song list/SongList";
    export default {
        name: "musicList",
        props:{
            infrom: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components:{
            SongList
        },
        methods: {
            imgErr(item){
                item.coverImgUrl = require(item.img1v1Url)
            }
        }
    }
</script>

<style scoped>
    .recommend-list {
        display: flex;
        flex-wrap: wrap;
    }
    .song-list img {
        height: 150px;
        width: 150px;
        margin-right: 15px;
        flex: 1;
    }
    .song-list div {
        width: 150px;
        margin-bottom: 10px;
        color: white;
        font-size: 15px;
        line-height: 150%;
    }
</style>