<template>
    <div class="dircovr-music">
        <div class="bag">
            <tab-bar class="tab-bar"></tab-bar>
        </div>
            <swiper :banner="arrUrl" class="swiper"></swiper>
        <template class="recommend">
            <recommend class="_recommned" :infrom="infrom"></recommend>
        </template>
        <template class="exclusive">
            <exclusive :broadcast="broadcast"></exclusive>
        </template>
        <template class="newSong">
            <new-song :newSongList="newSongList"></new-song>
        </template>
        <div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>

    </div>

</template>

<script>
    import tabBar from "./childeComps/tabBar";
    import recommend from "./childeComps/recommend";
    import exclusive from "./childeComps/exclusive";
    import NewSong from "./childeComps/NewSong";
    import {_getBanner,_getPrivatecontent,_getrecommend,_getNewSong} from "../../network/dircoverMusic";
    import Swiper from "../../components/common/swiper/swiper";

    export default {
        name: "DircovrMusic",
        data(){
            return{
                arrUrl:[],
                infrom:[],
                broadcast:[],
                newSongList:[]

            }
        },
        components: {
            tabBar,
            Swiper,
            recommend,
            exclusive,
            NewSong
        },
        created() {
            this.getBanner()
            this.getrecommend()
            this.getPrivatecontent()
            this.getNewSong()
        },
        methods: {
            //1.获取轮播图数据
            getBanner() {
                _getBanner().then(res => {
                    for(let i =0;i< res.banners.length;i++){
                        this.arrUrl.push(res.banners[i].imageUrl)
                    };
                })
            },
            //2.获取推荐歌单数据
            getrecommend() {
                _getrecommend().then( res => {
                    for(let i = 0; i<res.result.length; i++){
                        this.infrom.push(res.result[i])
                    }
                })
            },
            //3.获取独家放送数据
            getPrivatecontent() {
                _getPrivatecontent().then(res => {
                    for(let i = 0;i< res.result.length; i++){
                        this.broadcast.push(res.result[i])
                    }
                })
            },
            //4.获取最新音乐数据
            getNewSong() {
                _getNewSong().then(res =>{
                    for(let i = 0; i < res.result.length; i++){
                        this.newSongList.push(res.result[i])
                    }
                    console.log(this.newSongList);
                })
            }

        }
    }
</script>

<style scoped>
    .dircovr-music {
        position: relative;
        left: 200px;
        background-color: #16181c;
        width: calc(100% - 200px);
        top: 49px;
    }
    .bag {
        display: flex;
        justify-content: center;
        height:70px
    }
    .swiper {
        padding-top: 10px;
    }
    .recommend {
        width: 1000px;
        position: relative;
        margin: auto;
        margin-top: 20px;
        height: 100%;
    }
    .exclusive {
        width: 1000px;
        position: relative;
        margin: auto;
    }
    /*.newSong {*/
    /*    width: 1000px;*/
    /*    position:relative;*/
    /*    margin: auto;*/
    /*    height: 100%;*/
    /*}*/
</style>