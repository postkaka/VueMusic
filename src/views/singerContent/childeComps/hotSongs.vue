<template>
    <div class="hot-songs">
        <div class="picUrl" v-for="(item,index) in hotSongs.slice(0,1)" :key="index">
            <img  :src="item.al.picUrl" alt="">
        </div>
       <div class="list">
           <div class="text">热门50首</div>
           <div class="_list">
               <table class="table">
                   <tr
                           v-for="(item,index) in hotSongs.slice(0,10)"
                           :key="index"
                           @dblclick="trClick(index)"
                   >
                       <td class="number">
                           <span v-show="currentIndex !== index">{{number(index)}}</span>
                           <img src="../../../assets/img/playmusic/currentplay.svg" alt=""
                                v-show="currentIndex === index"
                                >
                       </td>
                       <td class="img">
                           <img src="../../../assets/img/detail/xin.svg" alt="" class="img-1">
                           <img src="../../../assets/img/detail/xiazai.svg" alt="">
                       </td>
                       <td class="songName">{{item.name}}</td>
                       <td v-if="item.al" class="album">{{item.al.name}}</td>
                       <td class="dt">0{{MillisecondToDate(item.dt)}}</td>
                   </tr>
               </table>
           </div>
           <div>查看全部50首
               <img src="" alt="">
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "hotSongs",
        data(){
            return{
                currentIndex: 1000
            }
        },
        props:{
            hotSongs:{
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            number(index) {
                if(index+1<10){
                    return "0" + (index+1)
                }else{
                    return index + 1
                }
            },
            //切换时间戳
            MillisecondToDate(msd) {
                let time = parseFloat(msd) / 1000;
                time = parseInt(time / 60.0) + ":" + (parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) < 10
                    ?("0" +parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) )
                    :parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)  );

                return time;
            },
            trClick(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .hot-songs {
        display: flex;
        width: 100%;
    }
    .picUrl {
        margin-right: 30px;
    }
    .picUrl img{
        height: 100px;
        width: 100px;
    }
    .list {
        width: 100%;
    }
    .text {
        color: white;
    }
    ._list {
        padding-right: 100px;
    }
    .table {
        border: 1px solid #2C2E32;
    }
    .table tr {
        height: 30px;
    }
    .img img{
        height: 15px;
        width: 15px;
    }
    .img-1 {
        margin-right: 5px;
    }
    .number {
        width: 6%;
        text-align: center;
    }
    .number img {
        height: 15px;
        width: 15px;
    }
    .img {
        width: 5%;
    }
    .songName {
        width: 50%;
    }
    .album {
        width: 40%;
    }
    .dt {
        width: 19%;
        text-align: center;
    }
</style>