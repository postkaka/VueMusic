<template>
    <div>
        <div>
            <div class="area">
                <div>语种:</div>
                <span v-for="(item,index) in area" :key="item.key">{{item.name}}</span>
            </div>
            <div class="type">
                <div>分类:</div>
                <span v-for="(item,index) in type" :key="item.key">{{item.name}}</span>
            </div>
        </div>
        <div>
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
                infrom:[]
            }
        },
        components: {
            musicList
        },
        created() {
            this.getSinger()
        },
        methods: {
            getSinger(){
                _getSinger().then(res => {
                    console.log(res);
                    this.infrom = res.artists
                    console.log(this.infrom);
                })
            }
        }
    }
</script>

<style scoped>
    .area {
        display: flex;
    }
    .type {
        display: flex;
    }
</style>