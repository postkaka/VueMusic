<template>
    <div>
        <div class="x">
            <img src="../../assets/img/user/x.svg" alt="" @click="xClick">
        </div>
       <div class="infrom">
           <div class="_loading">
               <img src="../../assets/img/user/phone.svg" alt="">
               <input  type="text" v-model="text">
               <input type="password" placeholder="请输入密码" v-model="password">
               <div class="enter" @click="enterClick">登陆</div>
               <div>注册</div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        data(){
            return {
                text: '',
                password: ''
            }
        },
        methods: {
            xClick() {
                this.$emit("xClick")
            },
            enterClick(){
                this.$emit("enterClick",this.text,this.password)
            }
        }
    }
</script>

<style scoped>
    .x {
        display: flex;
        justify-content: flex-end;
    }
    .x img{
        height: 30px;
        width: 30px;
    }
    .infrom {
        display: flex;
        text-align: center;
        margin-top: 40px;
    }
    ._loading img {
       width: 50%;
        height: 50px;
        margin-bottom: 30px;
    }
    ._loading input {
        margin-bottom: 15px;
        border-radius: 5px;
        width: 200px;
        height: 30px;

    }
    .enter {
        color: white;
        background-color: red;
        border: 1px solid red;
        border-radius: 10px;
        text-align: center;
        width: 200px;
        height: 35px;
        line-height: 35px;
        position: relative;
        left: 16%;
        margin-top: 10px;
        margin-bottom: 30px;
    }
</style>