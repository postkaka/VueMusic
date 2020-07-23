<template>
    <div class="dircovr-music">
        <swiper :banner="arrUrl" class="swiper"></swiper>
        <div class="recommend">
           <music-list :infrom="infrom">
               <div class="text">推荐歌单</div>
           </music-list>
        </div>
        <template class="exclusive">
            <exclusive :broadcast="broadcast"></exclusive>
        </template>
        <div class="newSong">
            <new-song :newSongList="newSongList" @clickSongs="clickSongs" ></new-song>
        </div>

    </div>

</template>

<script>
    import musicList from "../../components/content/musiclist/musicList";
    import exclusive from "./childeComps/exclusive";
    import NewSong from "./childeComps/NewSong";
    import {_getBanner,_getPrivatecontent,_getrecommend,_getNewSong,_getSongUrl} from "../../network/dircoverMusic";
    import Swiper from "../../components/common/swiper/swiper";

    export default {
        name: "DircovrMusic",
        data(){
            return{
                arrUrl:[],
                infrom:[],
                broadcast:[],
                newSongList:[],
                songID:null,
                SongUrl:null


            }
        },
        components: {
            Swiper,
            exclusive,
            NewSong,
            musicList
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
                    //console.log(this.arrUrl);
                })
            },
            //2.获取推荐歌单数据
            getrecommend() {
                _getrecommend().then( res => {
                    for(let i = 0; i<res.result.length; i++){
                        this.infrom.push(res.result[i])
                    }
                   // console.log(this.infrom);
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
                })
            },
            //5.获取音乐的url地址
            getSongUrl() {
                _getSongUrl(this.songID).then(res =>{
                    this.SongUrl = res.data[0].url
                })
            },


            //点击歌曲后获取当前歌曲id
            clickSongs(id) {
                this.songID = id
                this.getSongUrl()
                //console.log(this.SongUrl);
                this.$bus.$emit("clickSongs",this.SongUrl)
            }

        }
    }
</script>

<style scoped>
    .dircovr-music {
        /*position: relative;*/
        /*left: 200px;*/
        /*background-color: #16181c;*/
        /*width: calc(100% - 200px);*/
        /*top: 49px;*/
    }
    .text {
        color: white;
        margin-bottom: 10px;
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
    .newSong {
        width: 1000px;
        position:relative;
        margin: auto;
        height: 100%;
        margin-top: 20px;
        padding-bottom: 30px;
    }
</style>