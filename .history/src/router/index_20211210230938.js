import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
import discovery from '../components/discovery.vue'
import playlists from '../components/playlists.vue'
import songs from '../components/songs.vue'
import mvs from '../components/mvs.vue'
import result from '../components/result.vue'
import playlist from '../components/playlist.vue'
import mv from '../components/mv.vue'

const routes = [  
  {
    path: '/',
    redirect: '/discovery'
  },
  {
    // 发现音乐
    name:'discovery',
    path: '/discovery',
    component: discovery
  },
  {
    // 推荐歌单
    path: '/playlists',
    component: playlists
  },
  {
    // 歌单详情页
    path: '/playlist',
    component: playlist
  },
  {
    // 最新音乐
    path: '/songs',
    component: songs
  },
  {
    // 最新MV
    path: '/mvs',
    component: mvs
  },
  {
    // mv详情
    path: '/mv',
    component: mv
  },
  {
    // 搜索结果页
    path: '/result',
    component: result
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
