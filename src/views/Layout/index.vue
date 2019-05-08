<template>
  <div class="layout">
    <header class="header">
      <h1>郑州工业应用技术学院报修系统</h1>
    </header>
    <div class="side-bar">
      <sideBar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
  import sideBar from './components/side-bar';

  export default {
    name: "index",
    components: {
      sideBar
    }
  }
</script>


<style scoped lang="scss" src="./index.scss">

</style>
