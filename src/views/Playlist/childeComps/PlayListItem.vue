<template>
    <div class="play-list-item">
        <table>
            <tr class="header">
                <td class="index"></td>
                <td class="img">操作</td>
                <td class="text">音乐标题</td>
                <td class="singer">歌手</td>
                <td class="album">专辑</td>
                <td class="duration">时长</td>
            </tr>
            <tr v-for="(item,index) in tracks" :key="index">
                <td class="index">{{index+1}}</td>
                <td class="img">
                    <img src="../../../assets/img/detail/xin.svg" alt="">
                    <img src="../../../assets/img/detail/xiazai.svg" alt="">
                </td>
                <td @dblclick="itemClick(item.id)" click>{{item.name}}</td>
                <td>{{item.ar[0].name}}</td>
                <td>{{item.alia[0]}}</td>
                <td>{{0+MillisecondToDate(item.dt)}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PlayListItem",
        props:{
            tracks:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            //时间戳切换
            MillisecondToDate(msd) {
                let time = parseFloat(msd) / 1000;
                time = parseInt(time / 60.0) + ":" + (parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) < 10
                    ?("0" +parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) )
                    :parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)  );

                return time;
            },
            itemClick(id){
                this.$emit("itemClick",id)
            }
        }
    }
</script>

<style scoped>
    .play-list-item {
    }
    .header td {
        border: 1px solid #1E2126;
    }
    .img img{
        height: 15px;
        width: 15px;
    }
    table tr {
        height: 45px;
    }
    .index {
        width: 50px;
        text-align: center;
    }
    .img {
        width: 100px;
    }
    .text {
        width: 700px;
    }
    .singer {
        width: 300px;
    }
    .album {
        width: 400px;
    }
    .duration {
        width: 100px;
    }
</style>