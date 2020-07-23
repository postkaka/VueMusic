<template>
    <div>
        <slot></slot>
        <div class="recommend-list">
            <song-list :infrom="infrom" v-for="(item,index) in infrom" :key="item.id" class="song-list">
                <img :src="imgUrl(item)" @click="songListClick(item.id)">
                <div>{{item.name}}</div>
            </song-list>
        </div>
    </div>
</template>

<script>
    import SongList from "../song list/SongList";
    export default {
        name: "musicList",
        data() {
            return{
                url: null
            }
        },
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
            imgUrl(item){
                if(item.coverImgUrl){
                 return item.coverImgUrl
                }else {
                   return  item.picUrl
                }
            },
            songListClick(id) {
                //console.log(id);
                this.$router.push('/playList/' + id)
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