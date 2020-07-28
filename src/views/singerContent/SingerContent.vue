<template>
    <div class="singerContent">
        <div class="infrom">
            <div class="img">
                <img v-if="data.artist" :src="data.artist.img1v1Url"  alt="">
            </div>
            <div class="intro">
                <div class="_infrom">
                    <div class="singer">歌手</div>
                    <div v-if="data.artist" class="artistName">{{data.artist.name}}</div>
                </div>
                <div class="_infromImg">
                    <div class="_infromImg-1">
                        <img src="../../assets/img/informationBar/music.svg" alt="">
                        <div v-if="data.artist">单曲数: {{data.artist.musicSize}}</div>
                    </div>
                    <div class="_infromImg-2">
                        <img src="../../assets/img/informationBar/zhuanjiguangpan.svg" alt="">
                        <div v-if="data.artist">专辑数: {{data.artist.albumSize}}</div>
                    </div>
                </div>
                <div class="referral">个人介绍：
                <span v-if="data.artist">{{data.artist.briefDesc}}</span>
                </div>
            </div>
        </div>
        <div class="tab-bar">
            <div v-for="(item,index) in tab"
                 :key="index"
                 :class="{active: currentIndex === index}"
                 @click="tabClick(index)"
            >
                {{item}}
            </div>
        </div>
        <hot-songs
                :hot-songs="data.hotSongs"
                class="hot-song"
                :class="{show: currentIndex !== 0 }"
        ></hot-songs>
        <album-list :hot-albums="hotAlbums" :class="{show: currentIndex !== 0 }"
        ></album-list>
        <mv-list :mvs="mvs"
                    :class="{show: currentIndex !==1}"
        ></mv-list>
        <referral
                :referral="referral"
                :class="{show: currentIndex !==2}"
        ></referral>
    </div>
</template>

<script>
    import {_getArtists, _getAlbum, _getAlbumInfrom,_getMv,_getDesc} from "../../network/singer";
    import hotSongs from "./childeComps/hotSongs";
    import albumList from "./childeComps/albumList";
    import MvList from "./childeComps/MvList";
    import referral from "./childeComps/referral";
    export default {
        name: "SingerContent",
        data(){
            return{
                id: null,
                tab: ['专辑','MV','歌手详情','相似歌手'],
                data: {},
                currentIndex: 0,
                hotAlbums: [],
                song:[],
                mvs:[],
                referral:{}
            }
        },
        components: {
            hotSongs,
            albumList,
            MvList,
            referral
        },
        created() {
            this.id = this.$route.params.id
            this.getArtists(this.id);
            this.getAlbum(this.id);
            this.getMv(this.id);
            this.getDesc(this.id)

        },
        methods: {
            //网络请求
            getArtists(id){
                _getArtists(id).then(res => {
                    //console.log(res);
                    this.data = res;
                    //console.log(this.data);
                })
            },
            getAlbum(id){
                _getAlbum(id).then(res => {
                    for(let i =0; i < res.hotAlbums.length;i++){
                       this.hotAlbums.push(res.hotAlbums[i])
                        _getAlbumInfrom(res.hotAlbums[i].id).then(res =>{
                            this.hotAlbums[i].songs=res.songs
                        })
                    }
                    //console.log(this.hotAlbums);
                })
            },
            getMv(id){
                _getMv(id).then(res => {
                   // console.log(res);
                    this.mvs = res.mvs
                })
            },
            getDesc(id){
                _getDesc(id).then(res => {
                    this.referral = res
                    console.log(res);
                })
            },


            tabClick(index){
                this.currentIndex = index
            },
        }
    }
</script>

<style scoped>
    .singerContent {
        position: relative;
        left: 200px;
        background-color: #16181c;
        width: calc(100% - 200px);
        top: 49px;
        padding-left: 40px;
        padding-bottom: 100px;
    }
    .infrom {
        display: flex;
    }
    ._infrom {
        display: flex;
    }
    .artistName {
        color: white;
        line-height: 30px;
        font-size: 24px;
        margin-left: 5px;
    }
    .img img {
        height: 200px;
        width: 200px;
    }
    .singer {
        border: 1px solid red;
        height: 30px;
        width: 50px;
        text-align: center;
        line-height: 30px;
        border-radius: 7%;
        color: red;
    }
    .intro {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    ._infromImg {
        display: flex;
    }
    ._infromImg img {
        height: 25px;
        width: 25px;
        margin-right: 5px;
        margin-left: 5px;
    }
    ._infromImg-1, ._infromImg-2 {
        display: flex;
        border: 1px solid #25272B;
        background-color: #25272B;
        width: 130px;
        border-radius: 10px;
    }
    ._infromImg-1 {
        margin-right: 7px;
    }
    ._infromImg-1, ._infromImg-2 div{
        color: white;
        line-height: 25px;
    }
    .referral {
        color: white;
    }
    .referral span {
        color: #213B59;
    }
    .tab-bar {
        color: white;
        display: flex;
        margin-top: 10px;
    }
    .tab-bar div {
        width: 70px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-right: 5px;
    }
    .active {
        border-bottom: 2px solid red;
    }
    .hot-song {
        margin-top: 10px;
    }
    .show {
        display: none;
    }
</style>