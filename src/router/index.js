import Vue from "vue"
import VueRouter from "vue-router"
import PlayListItem from "../views/Playlist/childeComps/PlayListItem";

const Dircovr = () => import("../views/dircovrMusic/Dircovr")
const DircovrMusic = () => import("../views/dircovrMusic/DircovrMusic")
const SongMenu = () => import("../views/dircovrMusic/childerouter/SongMenu")
const Top = () => import("../views/dircovrMusic/childerouter/Top")
const Singer = () => import("../views/dircovrMusic/childerouter/Singer")
const NewSongs = () => import("../views/dircovrMusic/childerouter/NewSongs")
const Radio = () => import("../views/dircovrMusic/childerouter/Radio")
const PlayList = () => import("../views/Playlist/PlayList")
const SingerContent = () => import("../views/singerContent/SingerContent")

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:"/dircovr"
    },
    {
        path:'/dircovr',
        component: Dircovr,
        children: [
            {
                path: '',
                redirect:'/dircovr/dircovrMusic'
            },
            {
                path: '/dircovr/dircovrMusic',
                component: DircovrMusic
            },
            {
                path: '/dircovr/songMenu',
                component: SongMenu
            },
            {
                path: '/dircovr/top',
                component: Top
            },
            {
                path: '/dircovr/singer',
                component: Singer
            },
            {
                path: '/dircovr/newSongs',
                component: NewSongs
            },
            {
                path: '/dircovr/radio',
                component: Radio
            }
        ]
    },
    {
        path: '/playList/:id',
        component: PlayList,

    },
    {
        path: '/singerContent/:id',
        component: SingerContent,
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})
//解决重复点击时路由跳转的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router