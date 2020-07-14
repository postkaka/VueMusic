import Vue from "vue"
import VueRouter from "vue-router"

const DircovrMusic = () => import("../views/dircovrMusic/DircovrMusic")

Vue.use(VueRouter)
const routes = [
    {
        path:'',
        redirect:"/dircovrMusic"
    },
    {
        path:'/dircovrMusic',
        component: DircovrMusic
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router