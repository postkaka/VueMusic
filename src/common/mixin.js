import {_getSongUrl,_getLyric,} from "../network/dircoverMusic";
import {_getDetail} from "../network/PlayList";

export const songsMixin = {
    data() {
        return {
            SongUrl : null,
            lyric: [],
            song:[
                {picUrl:'',name:'',song:{}}
            ]
        }
    },
    methods: {
        //获得歌曲数据
        getSongUrl(id) {
            _getSongUrl(id).then(res =>{
                // console.log(res);
                this.SongUrl = res.data[0]
                //console.log(this.SongUrl);
            })
        },
        //获取歌词数据
        getLyric(id) {
            _getLyric(id).then(res =>{
                this.lyric = res
            })
        },
        //获取歌曲详细信息
        getDetail(id) {
          _getDetail(id).then(res =>{
              this.song[0].picUrl =res.songs[0].al.picUrl;
              this.song[0].name = res.songs[0].name
              this.song[0].song.artists = res.songs[0].ar[0].name
              console.log(this.song);
          })
        },

       // 返回歌曲数据
        clickSongs(id) {
            this.getSongUrl(id)
            this.getLyric(id)
            //console.log(this.SongUrl);
            if(this.newSongList){
                this.song =this.newSongList.filter(function (item) {
                    return item.id == id;
                })
            } else{
                this.getDetail(id)
            }

            let timer = setTimeout(() =>{
                this.$bus.$emit("clickSongs",this.SongUrl,this.song,this.lyric)
            },500)

        }
    }
}