<template>
    <div class="box1">
    <div class="login">
        <div class="header">登录注册</div>
        <label for="">账号:</label>
        <input @input="input" type="text" name="" id="" v-model="name">
        <br>
        <label for="">密码:</label>
        <input @input="input" type="password" v-model="password">
        <br>
        <van-button  type="info" @click="holaderLogin">登录</van-button>
        <van-button type="info" @click="holaderUser">注册</van-button>
        
    </div>
</div>
</template>>

<script setup>
import { ref } from 'vue';
import router from '../router';

    const name = ref("admin")
    const password = ref("123456")
    
// 监听2个input框的值 同步到本地存储
const  input=()=>{
        localStorage.setItem("myName",name.value);
        localStorage.setItem("myPassword",password.value)
    }

    // 点击登录从本地存储取得值
const holaderLogin = ()=>{

    // 判断非空
    if(localStorage.getItem("myName") &&(localStorage.getItem("myPassword")) ){
        console.log(111);
        router.push('/list')
    }
    
}

// 注册函数
const holaderUser = ()=>{
    router.push("/user")
    console.log(11);
}

</script>

<style scoped>
.box1 {
    display: flex;
    justify-content: center;
    /* align-content: center; */
}
.login {
    height: 200px;
    opacity: 0.8;
    background: skyblue;
    text-align: center; 
    padding: 20px;
    margin-top: 35vh;
}
.header {
    margin-bottom: 50px;
    color: white;
}
label {
    margin: 10px;
}
input {
    margin: 10px;
}
</style>

