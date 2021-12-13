<template>
  <!-- <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <img src="" alt="">
        <a class="el-tooltip item" href="https://lanborn.github.io/Vueprs/">LanBorn</a>
      </div>
      <div class="history-wrapper">
        <el-button @click="backLast" icon="el-icon-caret-left" circle></el-button>
        <el-button @click="preForWard" icon="el-icon-caret-right" circle></el-button>
        <el-button @click="goHome" icon="el-icon-s-home" circle></el-button>
      </div>
    </div>
    <div class="center-box">
        <div class="el-input el-input--small el-input--prefix">
          <input
            type="text"
            autocomplete="on"
            placeholder="搜索"
            class="el-input__inner"
            @keyup.enter="toResult"
            v-model="inputValue"
          />
          <span class="el-input__prefix">
            <i class="el-input__icon el-icon-search"></i>
          </span>
          <ul class="list-group">
            <li v-for="(item,index) in songList" :key="index" class="list-group-item">
              <label for="songName">
                {{item.alias[0]}}
              </label>
            </li>
          </ul>
      </div>
    </div>
    <div class="right-box">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>
      </div>
  </div> -->
  <div class="top-container">
    <div class="left dflex">
      <img src="~/assets/images/home.svg" class="homeImg" align="middle" alt="" />
      <el-tooltip class="item" :enterable="false" effect="dark" content="去主页：www.bookbook.cc" placement="right">
        <a href="https://www.bookbook.cc" target="blank">bookbook.cc</a>
      </el-tooltip>
      <div class="control-go">
        <el-button type="info" size="small" class="clear-icon el-icon-arrow-left" @click="go(-1)" circle></el-button>
        <el-button type="info" size="small" class="clear-icon el-icon-arrow-right" @click="go(1)" circle></el-button>
        <el-button type="info" size="small" class="clear-icon iconfont icon-zhuye2" @click="goHome" circle></el-button>
      </div>
    </div>
    <div class="center">
      <el-autocomplete
        @keyup.native.enter="search"
        v-model="inputValue"
        :fetch-suggestions="getSearchAsync"
        :placeholder="placeholder"
        @select="handleSelect"
        prefix-icon="el-icon-search"
        clearable
        class="border-radius"
        size="small"
      ></el-autocomplete>
    </div>
    <div class="right">
      <el-switch v-model="navState" @change="changeNavState"> </el-switch>
      <el-switch class="music-control-state" v-model="state" @change="changeState"> </el-switch>
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="to('/discovery')" icon="iconfont icon-find-music">发现音乐</el-dropdown-item>
          <el-dropdown-item @click.native="to('/playlists')" icon="iconfont icon-find-music">推荐歌单</el-dropdown-item>
          <el-dropdown-item @click.native="to('/songs')" icon="iconfont icon-music">最新音乐</el-dropdown-item>
          <el-dropdown-item @click.native="to('/mvs')" icon="iconfont icon-mv">最新MV</el-dropdown-item>
          <el-dropdown-item divided>
            <a href="https://www.bilibili.com/video/BV1RE411W776" target="_blank">教程地址 BiliBili</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="https://gitee.com/penggang-home/cloud-music" target="_blank">前端地址 Gitee</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank">后端地址 Github</a>
          </el-dropdown-item>
          <el-dropdown-item >
            <a href="https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi" target="_blank">API接口文档</a>
          </el-dropdown-item>
        
          <el-dropdown-item disabled>版本号：v1.0.0</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-tooltip class="item" effect="dark" content="指不定哪天派上用场~" placement="bottom">
        <el-button type="danger" size="small" round v-popover:popover>
          <i class="iconfont icon-power"></i>
        </el-button>
      </el-tooltip> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'top',
  data() {
    return {
      query: '',
      inputValue : '',
      songList : [],
      time : '',
    }
  },
  // 这个地方要实现跟百度搜索一样的功能
  // updated : {
  //   time : setTimeout(() => {
  //     axios({
  //       url : 'https://autumnfish.cn/search',
  //       withCredentials : true,
  //       methods : 'get',
  //       params : {
  //         keywords : this.inputValue,
  //         limit : 6
  //       }
  //     }).then(
  //       res => {
  //         clearContent();
  //         this.songList = res.data.result.songs
  //       }
  //     )
  //   }, 800)
  // },
  methods: {
    toResult(){
      if(!this.inputValue){
        this.$message.warning('请输入内容')
      }else{
        // 跳转到搜索页并携带数据进行跳转
        this.$router.push('/result?q='+this.inputValue)
      }
    },
    backLast(){
      this.$router.back()
    },
    preForWard(){
      this.$router.forward()
    },
    goHome(){
      this.$router.push({
        name:'discovery'
      })
    }
  },
}
</script>

<style scoped>
  
</style>