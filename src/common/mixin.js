import {_getSongUrl,_getLyric} from "../network/dircoverMusic";

export const songsMixin = {
    data() {
        return {
            SongUrl : null,
            lyric: [],
            song:[]
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

       // 返回歌曲数据
        clickSongs(id) {
            this.getSongUrl(id)
            this.getLyric(id)
            //console.log(this.SongUrl);
            if(this.newSongList){
                this.song =this.newSongList.filter(function (item) {
                    return item.id == id;
                })
            } else {
               let oldSong = this.playlist.tracks.filter(function (item) {
                   return item.id == id;
               })
                this.song.push(oldSong.name)
            }


            let timer = setTimeout(() =>{
                this.$bus.$emit("clickSongs",this.SongUrl,this.song,this.lyric)
            },500)

        }
    }
}