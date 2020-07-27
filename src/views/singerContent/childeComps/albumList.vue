<template>
    <div>
        <div v-for="(item,index) in hotAlbums.slice(0,3)" :key="index" class="album">
            <div class="img">
                <img :src="item.blurPicUrl" alt="">
            </div>
            <div class="table">
                <div>{{item.name}}</div>
                <table>
                    <tr v-for="(item,index) in item.songs" :key="index">
                        <td class="number">
                            <span>{{number(index)}}</span>
                            <img src="" alt="">
                        </td>
                        <td class="img-1">
                            <img src="../../../assets/img/detail/xin.svg" alt="">
                            <img src="../../../assets/img/detail/xiazai.svg" alt="">
                        </td>
                        <td class="name">{{item.name}}</td>
                        <td class="dt">0{{MillisecondToDate(item.dt)}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "albumList",
        props:{
            hotAlbums: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods:{
            MillisecondToDate(msd) {
                let time = parseFloat(msd) / 1000;
                time = parseInt(time / 60.0) + ":" + (parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) < 10
                    ?("0" +parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) )
                    :parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)  );

                return time;
            },
            number(index) {
                if(index+1<10){
                    return "0" + (index+1)
                }else{
                    return index + 1
                }
            },
        }
    }
</script>

<style scoped>
    .album {
        display: flex;
        margin-top: 30px;
    }
    table {
        border: 1px solid #2C2E32;
    }
    .img img{
        height: 100px;
        width: 100px;
    }
    .img-1 img{
        height: 15px;
        width: 15px;
    }
    .table {
        width: 100%;
        margin-left: 30px;
        padding-right: 100px;
    }
    .table div {
        color: white;
    }
    tr {
      height: 30px;
    }
    .number {
        width: 6%;
        text-align: center;
    }
    .img-1 {
        width: 5%;
    }
    .name {
        width: 90%;
    }
    .dt {
        width: 5%;
    }
</style>