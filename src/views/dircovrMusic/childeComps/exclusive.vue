<template>
    <div class="exclusive">
        <div class="text">独家放送</div>
        <div class="exclusive-list">
            <div class="exclusive-item" v-for="(item,index) in broadcast" :key="index">
                <img :src="item.picUrl" alt="">
                <div>{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "exclusive",
        props: {
            broadcast: {
                type: Array,
                default() {
                    return []
                }
            }
        }

    }
</script>

<style scoped>
    .text {
        color: white;
        margin-bottom: 15px;
    }
    .exclusive-list {
        display: flex;

    }
    .exclusive-item img{
        height: 150px;
        width: 320px;
        margin-right: 20px;
    }
    .exclusive-item div {
        width: 300px;
        color: white;
        margin-top: 10px;
    }
</style>