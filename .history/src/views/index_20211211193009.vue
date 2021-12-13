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
            <span class="iconfont icon-music-list">推荐歌单</span>
            
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music">最新音乐</span>
            
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv">最新MV</span>
            
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

<style scoped>
  .index-container {
    display: flex;
  }

  .index-container .nav {
    background-color: #ededed;
    width: 200px;
    height: 100%;
  }

  .index-container .nav li {
    height: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .index-container .nav li:hover {
    background-color: #e7e7e7;
  }

  .index-container .nav li .iconfont {
    margin-right: 10px;
    font-size: 20px;
  }

  .index-container .nav li a {
    color: black;
    padding-left: 30px;
    font-size: 18px;
    line-height: 60px;
    width: 100%;
    height: 100%;
  }

  .index-container .nav li a.router-link-active {
    color: #dd6d60;
  }

  .index-container .nav li a.router-link-active .iconfont {
    color: #dd6d60;
  }

  .index-container .main {
    flex: 1;
    overflow-y: scroll;
    padding: 10px 20px;
  }

  .index-container .main > div {
    max-width: 1100px;
    margin: 0 auto;
  }

  .index-container .player {
    background: #f1f3f4;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .index-container audio {
    width: 100%;
    border-radius: none;
    outline: none;
  }
</style>