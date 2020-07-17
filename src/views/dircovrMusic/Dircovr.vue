<template>
    <div class="dircovr">
        <div class="bag">
            <tab-bar></tab-bar>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import tabBar from "./childeComps/tabBar";
    export default {
        name: "Dircovr",
        components: {
            tabBar
        }
    }
</script>

<style scoped>
    .dircovr {
        position: relative;
        left: 200px;
        background-color: #16181c;
        width: calc(100% - 200px);
        top: 49px;
    }
    .bag {
        display: flex;
        justify-content: center;
        height:70px;
    }
</style>