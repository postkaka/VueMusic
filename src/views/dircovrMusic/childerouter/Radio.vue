<template>
    <div>
        <music-list :infrom="infrom" class="music-list">

        </music-list>
    </div>
</template>

<script>
    import {_getRadio} from "../../../network/dircoverMusic";
    import musicList from "../../../components/content/musiclist/musicList";

    export default {
        name: "Radio",
        data(){
            return{
                infrom: []
            }
        },
        components: {
            musicList
        },
        created() {
            this.getRadio()
        },
        methods:{
            getRadio() {
                _getRadio().then(res =>{
                    this.infrom = res.djRadios
                })
            }
        }
    }
</script>

<style scoped>
    .music-list {
        width: 1000px;
        position: relative;
        margin: auto;
        height: 100%;
        padding-bottom: 50px;
    }
</style>