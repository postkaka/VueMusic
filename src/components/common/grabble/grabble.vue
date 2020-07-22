<template>
    <div class="_grabble">
        <el-autocomplete suffix-icon="el-icon-search" class="grabble"
                         placeholder="请输入内容"
                         :fetch-suggestions="query"
                         v-model="content"
                         @select="handleSelect"
                         :debounce=0
        >
            <template slot-scope="{ item }">
            <div class="name">{{ item }}</div>
            </template>
        </el-autocomplete>
    </div>
</template>

<script>
    import {_getSearch,_getHotList,_getOffer} from "../../../network/homePage";

    export default {
        name: "grabble",
        data() {
            return {
                content: "",
                diseaseList: [],

            }
        },

        created() {
            this.getHotList()
        },
        methods:{
            //获取热搜列表
            getHotList(){
              _getHotList().then(res =>{
                  for(let i = 0;i < res.result.hots.length;i++){
                      this.diseaseList.push(res.result.hots[i].first)
                  }

              })
            },
            query(queryString, cb) {
                console.log("变化了", queryString);
                if(this.content == ''){
                    cb(this.diseaseList)
                }else if(this.content !== '') {
                    console.log("有内容");
                    this.getOffer(queryString)
                    cb(this.diseaseList)

                }
            },

            handleSelect(item) {
                this.content = item
                _getSearch(item).then(res => {
                    console.log(res);
                })
            },
            //获取搜索建议数据
            getOffer(content){
                    _getOffer(content).then(res =>{
                        this.diseaseList = []
                        if(res.result.songs){
                            for(let i = 0; i <res.result.songs.length; i++){
                                this.diseaseList.push(res.result.songs[i].name)
                            }
                        }else if(res.result.albums){
                            for(let i = 0; i <res.result.albums.length; i++){
                                this.diseaseList.push(res.result.albums[i].name)
                            }
                        }else{
                            for(let i = 0; i <res.result.artists.length; i++){
                                this.diseaseList.push(res.result.artists[i].name)
                            }
                        }

                    })

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