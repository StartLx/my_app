<template>


 <div class="boxs">
    <div>注册</div>
    <label for="">账号:</label>
    <input type="text" v-model="userName">
    <br>
    <label for="">密码:</label>
    <input type="password" v-model="userPs">
    <br>
    <van-button type="info" @click="register">注册</van-button>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../router';


const userName = ref(null);
const userPs = ref(null);

// 注册函数
const register = () =>{


    if(userName.value && userPs.value) {

    localStorage.setItem("userName",userName.value);
    localStorage.setItem("userPs",userPs.value);
    console.log("注册成功");
    router.push("/")
    }
    console.log("空");
    // router.push("/user")
    

   
}




</script>

<style scoped>

.boxs {
    text-align: center;
    background-color: aqua;
}
</style>