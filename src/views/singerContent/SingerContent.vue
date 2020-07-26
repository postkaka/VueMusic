<template>
    <div class="singerContent">
        <div class="infrom">
            <div class="img">
                <img :src="data.artist.img1v1Url" alt="">
            </div>
            <div>
                <div class="_infrom">
                    <div class="singer">歌手</div>
                    <div class="artistName">{{data.artist.name}}</div>
                </div>
                <div>
                    <div>
                        <img src="" alt="">
                        <div>单曲数:</div>
                    </div>
                    <div>
                        <img src="" alt="">
                        <div>专辑数:</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <div>
            <div v-for="(item,index) in tab" :key="index">
                {{item}}
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
    import {_getArtists} from "../../network/singer";

    export default {
        name: "SingerContent",
        data(){
            return{
                id: null,
                tab: ['专辑','歌手详情','相似歌手'],
                data: {}
            }
        },
        created() {
            this.id = this.$route.params.id
            this.getArtists(this.id)
        },
        methods: {
            getArtists(id){
                _getArtists(id).then(res => {
                    console.log(res);
                    this.data = res;
                    console.log(this.data);
                })
            }
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
        font-size: 32px;
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
</style>