<template>
  <div id="app">
    <!--<router-view/>-->
    <h2>音乐推荐系统</h2>
    <genrebox></genrebox>
    <!--<test></test>-->
  </div>
</template>

<script>
  import GenretBox from './components/GenreBox'

  export default {
    name: 'App',
    components: {
      "genrebox": GenretBox,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
