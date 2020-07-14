<template>
    <div class="dircovr-music">
        <div class="bag">
            <tab-bar class="tab-bar"></tab-bar>
        </div>

    </div>
</template>

<script>
    import tabBar from "./childeComps/tabBar";
    export default {
        name: "DircovrMusic",
        components: {
            tabBar
        }
    }
</script>

<style scoped>
    .dircovr-music {
        position: relative;
        left: 150px;
        background-color: #16181c;
        overflow: hidden;
        width: calc(100% - 150px);
        height: 100%;
    }
    .bag {
        display: flex;
        justify-content: center;
        height:60px
    }

</style>