import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import List from "../view/List.vue"
import User from "../components/User.vue"



const router = createRouter({
    history: createWebHistory(),  //路由模式为 history
    routes:[

        {path:"/",component:Home},
        {path:"/list",component:List},
        {path:"/user",component:User}
    ]
})




export default router