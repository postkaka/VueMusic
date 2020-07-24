<template>
    <div class="Subscribers">
        <div v-for="(item,index) in subscribers" :key="index" class="item">
                <img :src="item.avatarUrl" alt="" :title="item.nickname">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Subscribers",
        props:{
            subscribers:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .Subscribers {
        display: flex;
        flex-wrap: wrap;
    }
    .item {

    }
    .item img {
        height: 100px;
        width: 100px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>