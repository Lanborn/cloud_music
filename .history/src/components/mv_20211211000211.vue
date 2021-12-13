<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video controls :src="url"></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <!-- 头像 -->
            <img :src="icon" alt="" />
          </div>
          <!-- 歌手名 -->
          <span class="name">{{ mvInfo.artistName }}</span>
        </div>
        <div class="mv-info">
          <!-- 标题 -->
          <h2 class="title">{{ mvInfo.name }}</h2>
          <span class="date">发布：2014-11-04</span>
          <!-- 播放次数 -->
          <span class="number">播放：{{ mvInfo.playCount }}次</span>
          <!-- 描述 -->
          <p class="desc">
            {{ mvInfo.desc }}
          </p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论<span class="number">(15)</span></p>
        <div class="comments-wrap">
          <div v-for="(item,index) in hotComments" :key="index" class="item">
            <div class="icon-wrap">
              <img :src="item.user." alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">{{item.content}}</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">{{item.timeStr}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <div class="comment-wrap">
        <p class="title">最新评论<span class="number">(666)</span></p>
        <div class="comments-wrap">
          <div class="item">
            <div class="icon-wrap">
              <img src="../assets/avatar.jpg" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">谁说的，长大了依旧可爱哈</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">2020-02-12 17:26:11</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
        :limit="limit"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
            <div v-for="(item, index) in simiMvs" :key="index" class="item">
              <div class="img-wrap">
                <img :src="item.cover" alt="" />
                <span class="iconfont icon-play"></span>
                <div class="num-wrap">
                  <div class="iconfont icon-play"></div>
                  <div class="num">{{ item.playCount }}</div>
                </div>
                <span class="time">{{ item.duration }}</span>
              </div>
              <div class="info-wrap">
                <div class="name">{{ item.name }}</div>
                <div class="singer">{{ item.artistName }}</div>
              </div>
            </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入 axios
import axios from "axios";
export default {
  name: "mv",
  data() {
    return {
      // 总条数
      total: 20,
      // 页码
      page: 1,
      // 页容量
      limit: 10,
      // mv地址
      url: "",
      // 相关mv
      simiMvs: [],
      // mv的信息
      mvInfo: {},
      // 头像
      icon:'',
      hotComments : [],

    };
  },
  created() {
    // 获取mv播放地址
    axios({
      url: "https://autumnfish.cn/mv/url",
      withCredentials: true, //关键
      method: "get",
      params: {
        // 获取url中的 id
        id: this.$route.query.q
      }
    }).then(res => {
      console.log(res)
      this.url = res.data.data.url;
    });
    // 获取 相关的mv
    axios({
      url: "https://autumnfish.cn/simi/mv",
      withCredentials: true, //关键
      method: "get",
      params: {
        mvid: this.$route.query.q
      }
    }).then(res => {
      // console.log(res)
      // 保存相关MV
      this.simiMvs = res.data.mvs;
    });

    // 获取 mv的信息
    axios({
      url: "https://autumnfish.cn/mv/detail",
      withCredentials: true, //关键
      method: "get",
      params: {
        mvid: this.$route.query.q
      }
    }).then(res => {
      // console.log(res)
      // mv的信息
      this.mvInfo = res.data.data;
      // 获取 歌手信息
      axios({
        url: "https://autumnfish.cn/artists",
        withCredentials: true, //关键
        method: "get",
        params: {
          id: this.mvInfo.artists[0].id
        }
      }).then(res => {
        // console.log(res);
        // 歌手的封面信息
        this.icon = res.data.artist.picUrl
      });
    });
    
    // 获取评论数据
    axios({
      url:"https://autumnfish.cn/comment/mv",
      withCredentials: true, //关键
      method:'get',
      params:{
        id:this.$route.query.q,
        limit:10,
        offset:0
      }
    }).then(res=>{
      console.log(res)
      this.hotComments = res.data.hotComments
    })
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style></style>
