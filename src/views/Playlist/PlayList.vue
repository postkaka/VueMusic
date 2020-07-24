<template>
    <div class="playList">
        <div class="infrom">
            <div class="coverImg">
                <img :src="playlist.coverImgUrl" alt="">
            </div>
            <div class="_infrom">
                <div class="headline">
                    <div>歌单</div>
                    <span>{{playlist.name}}</span>
                </div>
                <div class="btn">
                    <div class="bofang">
                        <img src="../../assets/img/playmusic/bofang.svg" alt="" >
                        <span>播放全部</span>
                    </div>
                    <div class="_btn">
                        <img src="../../assets/img/detail/add.svg" alt="">
                        <span>收藏({{playlist.subscribedCount}})</span>
                    </div>
                    <div class="_btn">
                        <img src="../../assets/img/detail/share.svg" alt="">
                        <span>分享({{playlist.shareCount}})</span>
                    </div>
                </div>
                <div class="presentation">
                    <div>标签：
                    <span>{{playlist.englishTitle}}</span>
                    </div>
                    <div>{{playlist.description}}</div>
                </div>
            </div>
        </div>
       <div class="tab">
           <div v-for="(item,index) in tab" :key="index"  :class="{active: index === currentIndex }" @click="itemClick(index)">
               <div >{{item}}</div>
           </div>
       </div>
        <play-list-item :tracks="playlist.tracks" :class="{condition: currentIndex !== 0}"></play-list-item>
        <comment :class="{condition: currentIndex !== 1}" :comment="comment" class="comment"></comment>
        <subscribers :class="{condition: currentIndex !== 2}" :subscribers="subscribers" class="subscribers"></subscribers>
    </div>
</template>

<script>
    import {_getPlayList,_getComent,_getSubscribers} from "../../network/PlayList";
    import PlayListItem from "./childeComps/PlayListItem";
    import comment from "./childeComps/comment";
    import Subscribers from "./childeComps/Subscribers";
    export default {
        name: "PlayList",
        data(){
            return{
                id: null,
                playlist: {},
                tab:["歌曲列表","评论","收藏者"],
                currentIndex: 0,
                comment: [],
                subscribers: []
            }
        },
        components: {
            PlayListItem,
            comment,
            Subscribers
        },
        created() {
            this.id = this.$route.params.id
            this.getPlayList(this.id)
            this.getComment(this.id)
            this.getSubscribers(this.id,75)
        },
        methods:{
            //获取歌单数据
            getPlayList(id){
                _getPlayList(id).then(res =>{
                    //console.log(res.playlist);
                    this.playlist = res.playlist
                    //console.log(this.playlist);
                })
            },
            itemClick(index){
                this.currentIndex = index
               // console.log(index);
            },
            //获取评论数据
            getComment(id){
                _getComent(id).then(res => {
                    this.comment = res.hotComments
                    //console.log(res.hotComments);
                })
            },
            //获取收藏数据
            getSubscribers(id,limit){
                _getSubscribers(id,limit).then(res =>{
                    //console.log(res);
                    this.subscribers = res.subscribers
                })
            }


        }
    }
</script>

<style scoped>
    .playList {
        position: relative;
        left: 200px;
        background-color: #16181c;
        width: calc(100% - 200px);
        top: 49px;
        padding-left: 40px;
    }
    .infrom {
        display: flex;
        padding-top: 50px;
    }
    ._infrom {
        display: flex;
        flex-direction: column;
        justify-content:space-between ;
        margin-left: 25px;
    }
    .headline  div{
        color: red;
        border: 1px solid red;
        height: 30px;
        width: 50px;
        text-align: center;
        line-height: 30px;
        border-radius: 7%;
    }
    .headline {
        display: flex;
    }
    .headline span {
        color: white;
        font-size: 23px;
        margin-left: 10px;
    }
    .coverImg img {
        height: 200px;
        width: 200px;
    }
    .btn {
        display: flex;
    }
    .btn div{
        height: 40px;
        width: 150px;
        color: white;
        text-align: center;
        line-height: 40px;
    }
    .btn img {
        height: 20px;
        width: 20px;
        position: relative;
        top: 10%;
    }
    .btn span {
        margin-left: 5px;
    }
    .bofang {
        background-color: red;
        border: 1px solid red;
        border-radius: 10px;
    }
    ._btn {
        background-color: #25272B;
        border: 1px solid #25272B;
        border-radius: 10px;
        margin-left: 20px;
    }

    .presentation div {
        color: white;
        margin-top: 15px;
    }
    .tab {
        display: flex;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .tab div {
        color: white;
        width: 100px;
        text-align: center;
        line-height: 30px;
    }
    .tab .active  {
        border-bottom: 3px solid red;
    }
    .condition {
        display: none;
    }
    .comment {
        padding-right: 50px;
        height: 100%;
        padding-bottom: 60px;
    }
    .subscribers {
        padding-bottom: 60px;
    }
</style>