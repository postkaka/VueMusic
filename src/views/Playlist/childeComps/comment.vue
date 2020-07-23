<template>
    <div>
        <table>
            <tr>
                <el-input type="textarea" placeholder="请输入内容" v-model="textarea"></el-input>
            </tr>
            <tr>
                <div>精彩评论</div>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return{
                textarea: ""
            }
        },
        props: {
            comment:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>