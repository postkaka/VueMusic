<template>
    <div class="home-page">
        <div class="ico">
            <img class="ico-one" src="../../../assets/img/HomePage/touxiang.jpeg" alt="">
            <div>离岸音乐</div>
            <img class="ico-back" src="../../../assets/img/content/back.svg" alt="" @click="back">
        </div>
        <grabble class="grabble"></grabble>
        <div class="landing">
                <img src="../../../assets/img/content/profile-o.svg" alt="" @click="loadingClick">
                <div @click="loadingClick">未登录</div>
            <img src="../../../assets/img/content/min.svg" alt="">
            <img src="../../../assets/img/content/reset.svg" alt="">
            <img src="../../../assets/img/content/x.svg" alt="">
        </div>
        <loading class="loading"
                 :class="{active: currentIndex === 1}"
                 @xClick="xClick"
                 @enterClick="enterClick"
        />

    </div>
</template>

<script>
    import grabble from "../grabble/grabble";
    import loading from "../../../views/loading/loading";
    import {_getCellphone} from "../../../network/login"
    export default {
        name: "HomePage",
        data(){
            return{
                currentIndex : 1,
            }
        },
        components:{
            grabble,
            loading
        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            //调用登录页面
            loadingClick(){
                this.currentIndex = "-"
            },
            //关闭登陆页面
            xClick(){
                this.currentIndex = 1
            },
            //获取用户的信息的网络请求
            getCellphone(text,password){
                _getCellphone(text,password).then(res =>{
                    //console.log(res);
                })
            },
            //子组件的点击登陆后调用此方法将账号信息传入
            enterClick(text,password){
                //console.log(text,password);
                this.getCellphone(text,password)
            }

        }
    }
</script>

<style scoped>
    .home-page {
        height: 49px;
        width: 100%;
        background-color: #202023;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
        display: flex;
        justify-content: space-between;
    }
    .ico {
        height: 49px;
        line-height: 49px;
        display: flex;
        flex: 1;

    }
    .ico div {
        color: white;
        margin-left: 10px;
    }
    .ico-one {
        margin-top: 5px;
        height: 40px;
        width: 40px;
        border-radius:50%;
        margin-left: 10px;
    }
    .ico-back {
        height: 49px;
        width: 30px;
        margin-left: 30px;
    }
    .grabble {
        width: 900px;
    }
    .landing {
        display: flex;
    }
    .landing img {
        width: 30px;
        height: 49px;
        margin-left: 20px;
    }
    .landing div {
        line-height: 49px;
        color: white;
        margin-left: 20px;
    }
    .loading {
        height: 500px;
        width: 300px;
        background-color: white;
        position: absolute;
        left: 40%;
        top: 60px;
    }
     .active {
        display: none;
    }
</style>