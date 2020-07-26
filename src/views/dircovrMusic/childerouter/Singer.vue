<template>
    <div>
        <div class="text">
            <div class="area">
                <div>语种:</div>
                <span v-for="(item,index) in area"
                      :key="item.key"
                      :class="{active: currentIndex === item.key}"
                      @click="areaClick(item.key)"
                >{{item.name}}</span>
            </div>
            <div class="type">
                <div>分类:</div>
                <span v-for="(item,index) in type"
                      :key="item.key"
                      :class="{_active: currentIndex1 === item.key}"
                      @click="typeClick(item.key)"
                >{{item.name}}</span>
            </div>
        </div>
        <div class="recommend">
            <music-list :infrom="infrom"></music-list>
        </div>

    </div>
</template>

<script>
    import {_getSinger} from "../../../network/dircoverMusic";
    import musicList from "../../../components/content/musiclist/musicList";

    export default {
        name: "Singer",
        data(){
            return{
                type:[
                    {name:"全部",key:-1},
                    {name:"男歌手",key:1},
                    {name:"女歌手",key:2},
                    {name:"乐队",key:3}
                ],
                area:[
                    {name:"全部",key:-1},
                    {name:"华语",key:7},
                    {name:"欧美",key:96},
                    {name:"日本",key:8},
                    {name:"韩国",key:16},
                    {name:"其他",key:0}
                ],
                infrom:[],
                currentIndex: -1,
                currentIndex1: -1
            }
        },
        components: {
            musicList
        },
        created() {
            this.getSinger()
        },
        methods: {
            getSinger(type,area){
                _getSinger(type,area).then(res => {
                    this.infrom = res.artists
                    console.log(this.infrom);
                })
            },
            areaClick(key){
                this.currentIndex = key
                this.getSinger(this.currentIndex1,this.currentIndex)
            },
            typeClick(key){
                this.currentIndex1 = key
                this.getSinger(this.currentIndex1,this.currentIndex)

            }
        }
    }
</script>

<style scoped>
    .text {
        position: relative;
        margin: auto;
        width: 1000px;
    }
    .area {
        display: flex;
        color: white;
    }
    .area span {
        color: white;
        margin-left: 20px;
        margin-bottom: 10px;
    }
    .type {
        display: flex;
        color: white;
    }
    .type span {
        color: white;
        margin-left: 20px;
    }
    .recommend {
        width: 1000px;
        position: relative;
        margin: auto;
        margin-top: 20px;
        height: 100%;
        padding-bottom: 50px;
    }
    .area .active {
        color: red;
    }
    .type ._active {
        color: red;
    }
</style>