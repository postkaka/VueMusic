<template>
    <div class="dircovr-music">
        <div class="bag">
            <tab-bar class="tab-bar"></tab-bar>
        </div>
        <swiper :banner="arrUrl" class="swiper"></swiper>
        <scroll class="wrapper">
            <div class="recommend">
                <recommend></recommend>
            </div>
        </scroll>
    </div>

</template>

<script>
    import tabBar from "./childeComps/tabBar";
    import recommend from "./childeComps/recommend";
    import {_getBanner} from "../../network/dircoverMusic";
    import Swiper from "../../components/common/swiper/Swiper";
    import scroll from "../../components/common/scroll/scroll";

    export default {
        name: "DircovrMusic",
        data(){
            return{
                arrUrl:[]
            }
        },
        components: {
            tabBar,
            Swiper,
            recommend,
            scroll
        },
        created() {
            this.getBanner()
        },
        methods: {
            getBanner() {
                _getBanner().then(res => {
                    // console.log(res);
                    // console.log(res.banners[0].imageUrl);
                    for(let i =0;i< res.banners.length;i++){
                        this.arrUrl.push(res.banners[i].imageUrl)
                    };
                    // console.log(this.arrUrl);
                })
            }
        }
    }
</script>

<style scoped>
    .dircovr-music {
        position: relative;
        left: 200px;
        background-color: #16181c;
        width: calc(100% - 200px);
        height: 100%;
        top: 49px;
    }
    .bag {
        display: flex;
        justify-content: center;
        height:70px
    }
    .swiper {
        padding-top: 10px;
    }
    .recommend {
        width: 1000px;
        position: relative;
        left:180px;
        margin-top: 20px;
        height: 100%;
    }
    .wrapper {
        overflow: hidden;
        height: 1000px;
    }
</style>