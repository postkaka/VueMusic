<template>
    <div>
        <div class="text-1">
            <div class="_text">简介</div>
            <div class="_text-1">{{referral.briefDesc}}</div>
        </div>
        <div v-for="(item,index) in referral.introduction" :key="index" class="text-2">
            <div class="_text-2">{{item.ti}}</div>
            <div class="_text-3">{{item.txt}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "referral",
        props:{
            referral:{
                type: Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .text-1 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    ._text {
        color: white;
        margin-bottom: 10px;
    }
    ._text-1 {
        text-indent:2em;
    }
    .text-2 {
        margin-bottom: 10px;
    }
    ._text-2 {
        color: white;
        margin-bottom: 10px;
    }
    ._text-3 {
        text-indent:2em;
    }
</style>