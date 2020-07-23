<template>
    <div class="home-page">
        <div class="ico">
            <img class="ico-one" src="../../../assets/img/HomePage/touxiang.jpeg" alt="">
            <div>离岸音乐</div>
            <img class="ico-back" src="../../../assets/img/content/back.svg" alt="" @click="back">
        </div>
        <grabble class="grabble"></grabble>
        <div class="landing">
            <img src="../../../assets/img/content/profile-o.svg" alt="">
            <div>未登录</div>
            <img src="../../../assets/img/content/min.svg" alt="">
            <img src="../../../assets/img/content/reset.svg" alt="">
            <img src="../../../assets/img/content/x.svg" alt="">
        </div>
    </div>
</template>

<script>
    import grabble from "../grabble/grabble";
    export default {
        name: "HomePage",
        components:{
            grabble
        },
        methods: {
            back() {
                this.$router.back(-1)
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
</style>