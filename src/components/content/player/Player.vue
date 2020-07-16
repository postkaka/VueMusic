<template>
    <div class="player">
        <audio :src="Url" controls="controls" autoplay="autoplay"></audio>
    </div>
</template>

<script>
    export default {
        name: "Player",
        data() {
            return{
                Url: null
            }
        },
        mounted() {
            this.$bus.$on("clickSongs",(SongUrl) => {
                this.Url = SongUrl
            })
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
</style>