<template>
    <div class="recommend">
        <div class="text">推荐歌单</div>
        <div class="recommend-list">
            <song-list :infrom="infrom" v-for="(item,index) in infrom" :key="index" class="song-list">
                <img :src="item.picUrl" alt="">
                <div>{{item.name}}</div>
            </song-list>
        </div>
    </div>
</template>

<script>
    import {_getrecommend} from "../../../network/dircoverMusic"
    import SongList from "../../../components/content/song list/SongList";
    export default {
        name: "recommend",
        components: {
            SongList
        },
        data() {
            return {
                infrom:[]
            }
        },
        created() {
            this.getrecommend()
        },
        methods: {
            getrecommend() {
                _getrecommend().then( res => {
                    for(let i = 0; i<res.result.length; i++){
                        this.infrom.push(res.result[i])
                    }
                    console.log(this.infrom);
                })
            }
        }
    }
</script>

<style scoped>
    .text {
        color: white;
        margin-bottom: 10px;
    }
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