<template>
  <div class="index-container">
    <!-- 左侧导航区 -->
    <div class="nav">
      <ul>
        <li>
          <routerLink to="/discovery">
            <span class="iconfont icon-find-music">发现音乐</span>
          </routerLink>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 播放标签 -->
    <div class="player">
      <!-- autoplay 自动播放 -->
      <audio crossOrigin="anonymous" :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      musicUrl:""
    };
  },
  methods: {
    getUrl(data){
      console.log(data)
      this.$nextTick(function () {
        this.musicUrl = data
      });
    }
  },
  mounted(){
    this.$bus.$on('getYy',this.getUrl)
  },
}
</script>

<style>
</style>