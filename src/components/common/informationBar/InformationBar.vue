<template>
    <div class="information-bar">
        <div class="recommend">推荐</div>
        <el-menu class="el_1"
                 background-color="#191B1f"
                 text-color="#828485">
            <el-menu-item>
                <img src="../../../assets/img/informationBar/music-line.svg" alt="">
                <span>发现音乐</span>
            </el-menu-item>
            <el-menu-item>
                <img src="../../../assets/img/informationBar/fm.svg" alt="">
                <span>私人FM</span>
            </el-menu-item>
            <el-menu-item>
                <img src="../../../assets/img/informationBar/zhibo.svg" alt="">
                <span>直播</span>
            </el-menu-item>
            <el-menu-item>
                <img src="../../../assets/img/informationBar/shiping.svg" alt="">
                <span>视频</span>
            </el-menu-item>
            <el-menu-item>
            <img src="../../../assets/img/informationBar/friend.svg" alt="">
            <span>朋友</span>
        </el-menu-item>
        </el-menu>
        <div class="my-music">我的音乐</div>
        <el-menu class="el_2"
                 background-color="#191B1f"
                 text-color="#828485"
        >
            <el-menu-item>
                <img src="../../../assets/img/informationBar/music.svg" alt="">
                <span>本地音乐</span>
            </el-menu-item>
            <el-menu-item>
                <img src="../../../assets/img/informationBar/xiazai.svg" alt="">
                <span>下载管理</span>
            </el-menu-item>
            <el-menu-item>
                <img src="../../../assets/img/informationBar/yunpan.svg" alt="">
                <span>我的音乐云盘</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "InformationBar"
    }
</script>

<style scoped>
    .information-bar {
        position: absolute;
        top:49px;
        bottom: 49px;
        right: 0;
        left: 0;
        width: 150px;
        background-color: #191B1f;

    }
    .el_1, .el_2{
    border: none;
    }
    .recommend {
        margin-top: 15px;
        margin-left: 20px;
        font-size: 14px;
        color:#828485 ;
    }
    .my-music {
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 20px;
        font-size: 14px;
        color:#828485 ;
    }
     .el_1 img {
        height: 20px;
        width: 20px;
    }
    .el_1 span {
        margin-left: 10px;
    }
    .el_2 img {
        height: 20px;
        width: 20px;
    }
    .el_2 span {
        margin-left: 10px;
    }
</style>