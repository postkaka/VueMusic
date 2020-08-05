<template>
    <div class="player">
        <div class="img">
            <img :src="url(this.times)" alt="">
            <div>{{name(this.times)}}</div>
        </div>
        <audio :src="audioPlay(this.times)" autoplay ref="audio"
                @canplay="getDuration"
                @ended="airTimeClear"
        ></audio>
       <div class="play-list">
           <div class="play">
               <img src="../../../assets/img/playmusic/pre.png" alt=""
                    @click="Previous"
               >
               <img src="../../../assets/img/playmusic/play.png" alt=""
                    :class="{active: play !== 0}"
                    @click="timerClick">
               <img src="../../../assets/img/playmusic/play2.png" alt=""
                    :class="{active: play === 0}"
                    @click="timerClick"
               >
               <img src="../../../assets/img/playmusic/next.png" alt=""
                    @click="next"
               >
           </div>
           <div class="timer">
               <div class="airTime">{{MillisecondToDate(airTime)}}</div>
               <div class="timer-bar" >
                   <div class="progress-bar" ref="progress"></div>
                   <div class="circle"  ref="circle"
                        :style="{left:circleLeft + 'px'}"
                        @mousedown="circleDown"
                        @mouseout="circleUp"
                        @mousemove="circleMove"
                   ></div>
                   <div class="conceal" :style="{width: (circleLeft-280) + 'px'}" ref="conceal"></div>
               </div>
               <div class="lastTime">{{ MillisecondToDate(endTime)}}</div>
           </div>
           <div class="end">
               <div class="end-1">
                   <img src="../../../assets/img/playmusic/volumn.svg" alt="" class="volume"
                        :class="{active: currentIndex !== 0}"
                        @click="volumeClick"
                   >
                   <img src="../../../assets/img/playmusic/novolumn.svg" alt="" class="volume-1"
                        :class="{active: currentIndex === 0}"
                        @click="volumeClick"
                   >
                   <div class="end-line">
                       <div class="huds"></div>
                       <div class="huds-red" :style="{width:hudsLeft + 'px'}"></div>
                       <div class="huds-ball" :style="{left:hudsLeft + 'px'}" ></div>
                   </div>
               </div>
               <div class="end-2">
                   <img src="../../../assets/img/playmusic/sunxubofang.svg" alt=""
                        :class="{active: fis === 0}"
                        @click="endClick"
                   >
                   <img src="../../../assets/img/playmusic/danquxunhuan.svg" alt=""
                        :class="{active: sec === 0}"
                        @click="endClick"
                   >
                   <img src="../../../assets/img/playmusic/suijibofang.svg" alt=""
                        :class="{active: thi === 0}"
                        @click="endClick"
                   >
                   <img src="../../../assets/img/playmusic/geciweidianji.svg" alt="">
                   <img src="../../../assets/img/playmusic/bofangliebiao.svg" alt=""
                        @click="songsList"
                   >
                   <div class="songsList" :class="{active: reveal === 0}">
                       <table>
                           <tr>
                               <td>播放列表({{Url.length}})</td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr v-for="(item,index) in Url" :key="index">
                               <td>{{item.name}}</td>
                               <td>{{item.artists}}</td>
                               <td></td>
                           </tr>
                       </table>
                   </div>
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
                Url: [],
                circleLeft: 280,
                airTime: 0,
                currentIndex:0,
                fis: 1,
                sec: 0,
                thi: 0,
                hudsLeft: 100,
                endTime: 0,
                volumeIndex: 1.0,
                play: 0,
                timer:null,
                errorImg: 'this.src="' + require('../../../assets/img/playmusic/back.jpg') + '"',
                times: 0,
                reveal: 0,
                exist: '',
                ifDrag: false,

            }
        },
        mounted() {
            this.$bus.$on("clickSongs", (SongUrl,song,lyric) => {
                let songs = { artists:'',name:"", picUrl:'', url:'',lyric: ''}
                if(this.Url.length < 1){
                   // songs.artists = song[0].song.artists[0].name
                    songs.url = SongUrl.url
                   // songs.name = song[0].name
                   // songs.picUrl = song[0].picUrl
                    songs.lyric = lyric.lrc
                    this.Url.push(songs)
                    console.log(this.Url);
                    console.log(songs.lyric.lyric);
                }else {
                   // songs.artists = song[0].song.artists[0].name
                    songs.url = SongUrl.url
                   // songs.name = song[0].name
                   //  songs.picUrl = song[0].picUrl
                   //  songs.lyric = lyric.lrc
                    //判断一下当前加入的列表的歌曲是否重复,如果重复清空songs
                    for (let i = 0; i < this.Url.length ; i++){
                        if(this.Url[i].artists === songs.artists){
                            this.exist = i;
                            console.log(this.exist);
                            console.log(this.Url);
                            songs = 0
                        }
                    }

                    if(songs === 0){
                        this.emptyPlay()
                        console.log('重复了');
                    } else{
                        this.Url.push(songs)
                        this.emptyPlay()
                        console.log("没重复");
                        console.log(this.Url);
                    }

                }

            })
        },
        methods: {
            timerClick(){
                let lift = this.$refs.progress.offsetWidth
                let conceal = this.$refs.conceal.offsetWidth
                let speed = (lift-conceal)/(this.endTime-this.airTime)

                if(this.play !==1){
                    this.play = 1
                    this.$refs.audio.play()

                    if(this.airTime < this.endTime){
                        this.timer = setInterval(()=>{
                            this.airTime = parseInt(this.$refs.audio.currentTime)
                            //播放的小球每次移动速度等于播放进度除当前播放歌曲长度
                            this.circleLeft += speed
                            if(this.airTime === this.endTime){
                                clearInterval(this.timer)
                                console.log("暂停了");
                                this.circleLeft = 280;
                                this.airTime = 0
                            }
                        },1000)
                    }
                }
                else{
                    this.play = 0;
                    this.$refs.audio.pause();
                    clearInterval(this.timer)
                }

            },
            pausePlay(){
                this.play = 0
            },
            volumeClick(){
                if(this.currentIndex == 0){
                    this.currentIndex = 1
                    this.hudsLeft = 0
                    this.$refs.audio.volume = 0
                }else {
                    this.currentIndex = 0
                    this.hudsLeft = 100
                    this.$refs.audio.volume = 1
                }
            },
            endClick() {
                if(this.fis == 1 && this.sec == 0 && this.thi == 0){
                    this.fis = 0;
                    this.sec = 1
                }else if(this.fis == 0 && this.sec == 1 && this.thi ==0){
                    this.sec = 0;
                    this.thi = 1
                }else{
                    this.thi = 0;
                    this.fis = 1
                }
            },
            //转换播放时长
            MillisecondToDate(s) {
                let h;
                h  =   Math.floor(s/60);
                //计算秒
                //算法：取得秒%60的余数，既得到秒数
                s  =   s%60;
                //将变量转换为字符串
                h    +=    '';
                s    +=    '';
                //如果只有一位数，前面增加一个0
                h  =   (h.length==1)?'0'+h:h;
                s  =   (s.length==1)?'0'+s:s;
                return h+':'+s;
            },
            audioPlay(index){
                if(this.Url[index]){
                    return this.Url[index].url
                }

            },

            //获取当前播发歌曲长度（秒数）
            getDuration(){
                //console.log(parseInt(this.$refs.audio.duration));
                this.endTime = parseInt(this.$refs.audio.duration);
                this.timerClick();
            },

            //当前音频播放结束后
            airTimeClear(){
                //console.log("播放结束");
               // console.log(this.Url);
                //默认循序播放
                if(this.fis == 1 && this.sec == 0 && this.thi == 0){
                    this.restoration()
                    console.log("顺序播放");
                    if(this.Url.length > 1 ){
                        if(this.times+1 === this.Url.length){
                            this.restoration()
                            this.timerClick()
                            console.log(this.times);
                        } else {
                            this.times = this.times + 1
                            console.log(this.times);
                            this.$refs.audio.src = this.Url[this.times].url;
                            this.timerClick()
                            setTimeout(() => {
                                this.$refs.audio.play()
                            },500)
                        }
                    }else {
                        this.restoration()
                        this.timerClick()
                    }
                }else if(this.fis == 0 && this.sec == 1 && this.thi ==0){
                    //单曲循环模式
                    this.restoration();
                    this.timerClick();
                    this.$refs.audio.play()
                    console.log("单曲循环");

                }else {
                    //随机播放模式

                    this.restoration()
                    console.log("随机播放");
                    if(this.Url.length > 1){
                        let newTimes = Math.floor(Math.random()*this.Url.length);
                        this.times = newTimes
                        this.$refs.audio.src = this.Url[this.times].url;
                        this.timerClick();
                        setTimeout(() => {
                            this.$refs.audio.play()
                        },500)
                    }else {
                        this.restoration();
                        this.timerClick();
                        this.$refs.audio.play()
                    }
                }

            },

            //监听鼠标点击小球
            circleDown(event){
                //console.log("点击你了");
                // console.log(event.clientX);
                this.ifDrag = true
            },
            //监听鼠标离开小球
            circleUp(){
                //console.log("离开你了");
                this.ifDrag = false

            },
            //监听鼠标在小球上的移动
            circleMove(event){
                let seat = this.$refs.progress.offsetWidth % parseInt(this.$refs.audio.duration);
                console.log(seat);
                if(this.ifDrag){
                    this.circleLeft = event.clientX-8
                    this.$refs.audio.currentTime = parseInt(this.circleLeft % seat)
                }else{
                    console.log("不移动");
                }
            },

            //当将新的歌曲加入播放队列触发
            emptyPlay() {
                this.play = 0;
                this.$refs.audio.pause();
                clearInterval(this.timer);
                this.circleLeft = 280;
                this.airTime = 0;
                if(this.exist == ''){
                    this.times += 1;
                    this.$refs.audio.src = this.Url[this.times].url
                } else {
                    this.times = this.exist;
                    this.exist = ''
                    this.$refs.audio.src = this.Url[this.times].url
                }

            },
            url(index){
                if(this.Url[index]){
                  return  this.Url[index].picUrl
                }else  {
                    return this.errorImg
                }
            },
            name(index){
                if(this.Url[index]){
                    return this.Url[index].name
                }
            },
            //播放器复位
            restoration() {
                clearInterval(this.timer)
                this.circleLeft = 280;
                this.airTime = 0;
            },

            //上一首
            Previous() {
                if(this.times !== 0 ){
                        this.times = this.times - 1
                        console.log(this.times);
                        this.restoration()
                        this.$refs.audio.src = this.Url[this.times].url;
                        this.timerClick();
                        setTimeout(() =>{
                            this.$refs.audio.play()
                        },500)
                    }
                else {
                    this.restoration()
                    this.timerClick();
                    alert("列表里面没有其他音乐了")
                }
            },
            //下一首
            next(){
                if(this.times+1 < this.Url.length){
                    this.times = this.times + 1;
                    console.log(this.times);
                    this.restoration()
                    this.$refs.audio.src = this.Url[this.times].url;
                    this.timerClick();
                    setTimeout(() =>{
                        this.$refs.audio.play()
                    },500)
                } else{
                    this.restoration()
                    this.timerClick();
                    alert("列表里面没有其他音乐了")
                }
            },
            //点击切换歌曲列表
            songsList(){
                if(this.reveal == 0){
                    this.reveal = 1
                }else {
                    this.reveal = 0
                }
            }
        },
        watch: {
            circleLeft(val,oldVal){
                if(val === this.$refs.progress.offsetWidth + 280 ){
                    this.ifDrag = false
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
    .img img{
        height: 100px;
        width: 100px;
    }
    .img div {
        color: white;
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
        color: white;
    }
    .lastTime {
        margin-left: 10px;
        color: white;
    }
    .end {
        display: flex;
        line-height: 49px;
        width: 700px;
    }
    .end-2 {
        line-height: 49px;
        height: 49px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .end-2 img{
        position: relative;
        bottom: -12px;
        height: 20px;
        width: 20px;
    }
    .volume {
        height: 20px;
        width: 20px;
        position: relative;
        bottom: -13px;
        margin-right: 5px;
    }
    .end-1 {
        line-height: 49px;
        display: flex;
        height: 49px;
        margin-left: 10px;
    }
    .volume-1 {
        height: 25px;
        width: 25px;
        position: relative;
        bottom: -8px;
    }
    .end-line {
        height: 49px;
        line-height: 49px;
    }
    .huds {
        border: 1px solid #454546;
        background-color: #454546;
        height: 3px;
        width: 100px;
        position: relative;
        bottom: -22px;
    }
    .huds-red{
        border: 1px solid red;
        background-color: red;
        height: 3px;
        position: relative;
        bottom: -20px;
    }
    .huds-ball{
        height: 9px;
        width: 9px;
        background-color: white;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        position: relative;
        bottom: -13px;
        z-index: 100;
    }
    .active {
        display: none;
    }
    .songsList {
        width: 800px;
        position: absolute;
        bottom: 49px;
        background-color: #212124;
        color: white;
    }
</style>