<template>
    <div class="_grabble">
        <el-autocomplete suffix-icon="el-icon-search" class="grabble"
                         placeholder="请输入内容"
                         :fetch-suggestions="query"
                         v-model="content"
                         @select="handleSelect"
        >
            <template slot-scope="{item}">
                <div>{{item.first}}</div>
            </template>
        </el-autocomplete>
    </div>
</template>

<script>
    import {_getSearch,_getHotList} from "../../../network/homePage";

    export default {
        name: "grabble",
        data() {
            return {
                content: null,
                diseaseList: []
            }
        },

        created() {
            this.getHotList()
        },
        methods:{
            //获取热搜列表
            getHotList(){
              _getHotList().then(res =>{
                  this.diseaseList = res.result.hots
                  console.log(this.diseaseList);
              })
            },
            query(queryString, cb) {
                let diseaseList = this.diseaseList;
                let result = queryString ? diseaseList.filter(this.createFilter(queryString)):diseaseList;
                cb(result)

            },
            createFilter(queryString){
                return (content) =>{
                    return(
                        content.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
                        //改为===0 就是筛选的数据只是首字匹配的列表项，需要包含输入字的所有列表项改为！==-1
                    )
                }
            },
            handleSelect(item) {
                console.log(item);
            }
        }
    }
</script>

<style scoped>
    ._grabble {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .grabble {
        width: 400px;
        border-radius: 50%;
    }
</style>