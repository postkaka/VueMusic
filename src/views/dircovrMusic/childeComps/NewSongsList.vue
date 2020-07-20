<template>
    <div class="new-songs-list">
        <table>
            <tr v-for="(item,index) in songList" :key="index" class="_tr">
                <td class="num">{{numberId(index + 1)}}</td>
                <td><img :src="item.album.picUrl" alt=""></td>
                <td>{{item.name}}</td>
                <td>{{item.album.name}}</td>
                <td>0{{MillisecondToDate(item.mMusic.playTime)}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "NewSongsList",
        props:{
            songList:{
                type:Array,
                default:{
                    return:[]
                }
            }
        },
        methods: {
            //数字标签转换
            numberId(num){
                if(num >= 10){
                    return num
                }else{
                    return "0" + num
                }
            },
            //时间戳转换
             MillisecondToDate(msd) {
        let time = parseFloat(msd) / 1000;
        if (null != time && "" != time) {
            if (time > 60 && time < 60 * 60) {
                time = parseInt(time / 60.0) + ":" + parseInt((parseFloat(time / 60.0) -
                    parseInt(time / 60.0)) * 60) ;
            }
            // else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            else if (time >= 60 * 60) {
                time = parseInt(time / 3600.0) + "时" + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + ":" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) ;
            }
            else {
                time = parseInt(time) + "秒";
            }
        }
        return time;
    }
    }
    }
</script>

<style scoped>
    .new-songs-list table tr td img {
        height: 70px;
        width: 70px;
    }
    ._tr {
        margin-bottom: 5px;
    }
    .new-songs-list table {
        border: 1px solid darkgrey;
        width: 1000px;
    }
    .num {
        width: 73px;
        height: 73px;
        text-align: center;
    }
</style>