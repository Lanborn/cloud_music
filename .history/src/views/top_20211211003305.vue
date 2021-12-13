<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <el-tooltip class="item" :enterable="false" effect="dark" content="去主页：lanborn.github.io/Vueprs/" placement="right">
          <!-- <img src="" alt=""> -->
          <a class="el-tooltip item" href="https://lanborn.github.io/Vueprs/">LanBorn</a>
        </el-tooltip>
      </div>
      <div style="margin-left:20px" class="history-wrapper">
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
.top-container {
  padding: 0;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center-box {
  flex-basis: 400px;
}
.left-box {
  margin-left: 20px;
  position: relative;
  text-align: center;
  font-size: 22px;
  color: black;
}
.left-box a {
  position: absolute;
  top:7%;
  font-size: 22px;
  color: black;
}

</style>