<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Home msg="Welcome to Your Vue.js"/>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/header">Header</router-link>
    </div> -->
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Header from './components/Header.vue'
// import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>
 <style src="./desing/style.css"></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
    margin-left: 8%;
    margin-right: 8%
}


</style>
