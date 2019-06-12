<template>
  <div class="genre-box">
    <div class="genre-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="(genre,index) in genres" :key="index" v-on:click="getGenre(genre.name)" :index="genre.index" >{{genre.name}}</el-menu-item>
      </el-menu>
    </div>
    <el-row class="singer-list">
      <el-col :span="4" v-for="(singer, index) in singerData" :key="index" :offset="2" class="singer-item">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" class="box-card">
          <img :src="singer.avatar" class="image">
          <div style="padding: 14px;">
            <a target="_blank" :href="singer.url"><span >{{ singer.name}}</span></a>
            <div class="text item">
              <span>播放数：{{ singer.hot }}</span><br>
              <span>粉丝数：{{ singer.fans_total }}</span><br>
              <span v-for="tag in singer.tags"> {{tag}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="page">
        <el-pagination
                background
                layout="prev, pager, next"
                :total= page.total
                :page-size = page.pageSize
        @current-change="chagepage">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "GenreBox",
    data() {
      return {
        genres: [
            {name:'流行', index:'1'},
            {name:'摇滚', index:'2'},
            {name:'民谣', index:'3'},
            {name:'电子', index:'4'},
            {name:'古风', index:'5'},
            {name:'说唱', index:'6'},
            {name:'金属', index:'7'},
            {name:'爵士', index:'8'},
            {name:'世界音乐', index:'9'},
            {name:'古典', index:'10'},
            {name:'轻音乐', index:'11'},
            {name:'ACG', index:'12'}
          ],
        activeIndex:'1',
        singerData : [],
        type: '',
        page: {
          pageSize: 12,
          pageNum: 1,
          total: 100
        }
      }
    },
    mounted() {
      this.getGenre('流行')
    },
    methods: {
      chagepage(e) {
        this.page.pageNum = e
        this.queryData() // 分页请求
      },
      getGenre: function (e) { // 类别请求
        this.type = e
        this.$axios.get(`/apis/music?pageSize=${this.page.pageSize}&pageNum=${this.page.pageNum}&genre=${this.type}`).then(res => {
          this.singerData = res.data.singer_body;
          this.page.pageNum = 1
          this.page.total = res.data.total
        }).catch(error => {
          console.log('网络出错' + error)
        })
      },
      queryData: function (e) {  //分页请求
        this.$axios.get(`/apis/music?pageSize=${this.page.pageSize}&pageNum=${this.page.pageNum}&genre=${this.type}`).then(res => {
          this.singerData = res.data.singer_body;
          this.page.total = res.data.total
        }).catch(error => {
          console.log('网络出错' + error)
        })
      }
    }
  }
</script>

<style scoped>
  .singer-list {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  .singer-item {
    padding: 20px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .box-card {
    width: 240px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .page {
    margin: 10px 0 30px;
  }
</style>
