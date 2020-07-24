<template>
    <div>
        <table>
            <tr class="input-box">
                <div>
                    <textarea type="text" v-model="textarea"  />
                </div>
                <div>评论</div>
            </tr>
            <tr class="Brilliant">
                <div>精彩评论</div>
            </tr>
            <tr v-for="(item,index) in comment" :key="index" class="commentList">
                <div class="img">
                    <img :src="item.user.avatarUrl" alt="">
                </div>
                <div>
                    <div class="text">
                        <div class="user">{{item.user.nickname}}:</div>
                        <div class="content">{{item.content}}</div>
                    </div>
                    <div class="time">{{timestampToTime(item.time)}}</div>
                </div>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return{
                textarea: ""
            }
        },
        props: {
            comment:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            //时间戳转换
             timestampToTime(timestamp) {
                 let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                 let Y = date.getFullYear() + '年';
                 let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
                 let D = date.getDate() + '日';
                 let h = date.getHours() + ':';
                 let m = date.getMinutes() + ':';
                 let s = date.getSeconds();
                 return Y+M+D+h+m+s;
                 }

        }
    }
</script>

<style scoped>
    table  {
        width: 100%;
        height: 100%;
        border: 1px solid;
        border-collapse:separate;
        border-spacing: 10px

    }
    .Brilliant {
        color: white;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        height: 20px;
    }
    table tr {
        height: 50px;
    }
    .input-box {
        border-collapse:separate;
        border-spacing: 10px
    }
    .input-box div textarea {
        width: 100%;
        height: 50px;
        padding: 5px;
    }
    .input-box div {
        text-align: right;
        color: white;
    }
    .commentList {
        display: flex;
        border-top: 2px solid #2B2C31;
        height: 60px;
    }
    .commentList div img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
        margin-right: 5px;
    }
    .text {
        display: flex;
        margin-left: 10px;
        margin-top: 10px;
    }
    .time {
        margin-left: 10px;
        margin-top: 10px;
        color: white;
    }
    .img {
        display: flex;
        justify-content: center;
    }
    .user {
        color: #23456C;
        margin-right: 6px;
    }
    .content {
        color: white;
    }
</style>