<template>
    <div class="SongMenu">
        <div class="text">
            <div class="hot">热门标签:</div>
            <div v-for="(item,index) in tag" :key="index" class="tags" @click="tagClick(item.name,index)"
            :class="{active: currentIndex === index}">
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="recommend">
            <music-list :infrom="infrom"></music-list>
        </div>
    </div>
</template>

<script>
    import {_getHot,_getMenu} from '../../../network/dircoverMusic'
    import musicList from "../../../components/content/musiclist/musicList";

    export default {
        name: "SongMenu",
        data() {
            return{
                tag: [],
                infrom: [],
                currentIndex: 0
            }
        },
        components:{
            musicList
        },
        created() {
            this.getHot()
            this.getMenu("华语")
        },
        methods: {
            //获取热门标签
            getHot() {
                _getHot().then(res => {
                    for(let i =0; i<res.tags.length; i++){
                        this.tag.push(res.tags[i])
                    }
                })
            },
            //获取歌单列表
            getMenu(item) {
                _getMenu(item).then(res =>{
                    this.infrom = res.playlists;
                    //console.log(this.infrom);
                })
            },
            tagClick(item,index) {
                this.currentIndex = index
                this.getMenu(item)
            }
        }
    }
</script>

<style scoped>
    .SongMenu {
        background-color: #16181c;
        width: calc(100% - 200px);
        position: relative;
        margin: auto;
    }
    .text {
        margin: auto;
        margin-top: 10px;
        text-align: center;
    }
    .hot {
        display: inline-block;
        color: white;
    }
    .tags{
        display: inline-block;
        margin-left: 15px;
        margin-right: 12px;
    }
    .recommend {
        width: 1000px;
        position: relative;
        margin: auto;
        margin-top: 30px;
        height: 100%;
        padding-bottom: 40px;
    }
    .active {
        color: red;
    }
</style>