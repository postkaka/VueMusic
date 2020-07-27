<template>
    <div class="mv-list">
        <div v-for="(item,index) in mvs" :key="index" class="list">
            <div>
                <div class="_mv">
                    <img :src="item.imgurl16v9" alt="" class="mv">
                    <div class="tag">
                        <img src="../../../assets/img/content/xst.svg" alt="">
                        <div>{{item.playCount}}</div>
                    </div>
                </div>
                <div class="name">{{item.name}}</div>
                <div class="artistName">{{item.artistName}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MvList",
        props: {
            mvs:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .mv-list {
        display: flex;
        flex-wrap: wrap;
    }
    .list {
        width: 100%;
        flex: 1px;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .list div{
        margin-right: 20px;
        margin-left: 10px;
    }
    ._mv {
        height: 170px;
        width:250px ;
    }
    .mv {
        height: 170px;
        width: 250px;
    }
    .tag {
        display: flex;
        position: relative;
        bottom: 170px;
        left: 160px;
    }
    .tag img{
        height: 20px;
        width: 20px;
    }
    .tag div {
        color: white;
        font-size: 12px;
        line-height: 20px;

    }
    .name {
        color: white;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 250px;
        word-wrap:break-word
    }
</style>