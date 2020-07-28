<template>
    <div class="player">
        <div class="img">
            <img src="" alt="">
            <div></div>
        </div>
       <div class="play-list">
           <div class="play">
               <img src="../../../assets/img/playmusic/pre.png" alt="">
               <img src="../../../assets/img/playmusic/play.png" alt="" @click="timerClick">
               <img src="../../../assets/img/playmusic/next.png" alt="">
           </div>
           <div class="timer">
               <div class="airTime">{{airTime}}</div>
               <div class="timer-bar" >
                   <div class="progress-bar"></div>
                   <div class="circle"  ref="circle" :style="{left:circleLeft + 'px'}"></div>
                   <div class="conceal" :style="{width: (circleLeft-250) + 'px'}"></div>
               </div>
               <div class="lastTime">03:40</div>
           </div>
           <div class="end">
               <div class="end-1">
                   <img src="../../../assets/img/playmusic/volumn.svg" alt="" class="volume">
                   <img src="../../../assets/img/playmusic/novolumn.svg" alt="" class="volume-1" >
                   <div>
                       <div></div>
                       <div></div>
                       <div></div>
                   </div>
               </div>
               <div class="end-2">
                   <img src="../../../assets/img/playmusic/sunxubofang.svg" alt="">
                   <img src="../../../assets/img/playmusic/danquxunhuan.svg" alt="">
                   <img src="../../../assets/img/playmusic/suijibofang.svg" alt="">
                   <img src="../../../assets/img/playmusic/geciweidianji.svg" alt="">
                   <img src="../../../assets/img/playmusic/bofangliebiao.svg" alt="">
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Player",
        data() {
            return {
                Url: null,
                circleLeft: 250,
                timer: 220,
                airTime: 0
            }
        },
        mounted() {
            this.$bus.$on("clickSongs", (SongUrl) => {
                this.Url = SongUrl
            })
        },
        methods: {
            timerClick(){
                if(this.airTime < this.timer){
                    setInterval(()=>{
                        this.airTime ++
                        this.circleLeft += (1000/this.timer)
                    },1000)
                }
            }
        }
    }
</script>

<style scoped>
    .player {
        height: 49px;
        width: 100%;
        background-color: #212124;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .player audio {

    }
    .play-list {
        display: flex;

    }
    .play {
        display: flex;
        width: 200px;
        justify-content: space-around;
        margin-right: 100px;
    }
    .play img {
        height: 45px;
        width: 45px;
    }
    .img {
        position: absolute;
        bottom: 49px;
    }
    .timer {
        display: flex;
        line-height: 49px;
        width: 100%;
    }
    .progress-bar {
        border: 1px solid #454546;
        background-color: #454546;
        height: 5px;
        width: calc(100vw - 700px)
    }
    .timer-bar {
        display: flex;
        line-height: 49px;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }
    .circle {
        height: 15px;
        width: 15px;
        background-color: white;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        position: absolute;
        bottom: 17px;
        z-index: 100;
    }
    .conceal {
        position: absolute;
        bottom: 21px;
        border: 1px solid red;
        background-color: red;
        height: 5px;
    }
    .airTime {
        margin-right: 5px;
    }
    .lastTime {
        margin-left: 10px;
    }
    .end {
        display: flex;
        line-height: 49px;
        justify-content: space-around;
        width: 700px;
    }
    .end-2 {
        line-height: 49px;
        height: 49px;
    }
    .end-2 img{
        height: 25px;
        width: 25px;
    }
    .volume {
        height: 20px;
        width: 20px;
        position: relative;
        bottom: -13px;
    }
    .end-1 {
        line-height: 49px;
        display: flex;
        height: 49px;
    }
    .volume-1 {
        height: 30px;
        width: 30px;
        position: relative;
        bottom: -8px;
    }
</style>