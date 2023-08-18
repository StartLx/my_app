import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"  
// import Vue from 'vue';

// import VantGreen from 'vant-green';
// import 'vant-green/lib/index.css';
import Vant from "vant"
import 'vant/lib/index.css';

// import {userLoginStore } from "./store/index.js"


const app = createApp(App)
// const store = userLoginStore()
app.use(router)
// app.use(store)
app.use(Vant)
app.mount('#app')

