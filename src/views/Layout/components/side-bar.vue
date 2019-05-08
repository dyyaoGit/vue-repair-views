<template>
  <el-menu mode="vertical"
           background-color="#304156"
           text-color="#fff"
  >
    <!--<sideBarItem v-for="(item, index) in routes" :key="index" :opt="item" />-->
    <el-submenu index="998">
      <template slot="title">用户管理</template>
      <el-menu-item>
        管理员管理
      </el-menu-item>
      <el-menu-item>
        欢迎页
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import sideBarItem from './side-bar-item';

  export default {
    name: "side-bar",
    components: {
      sideBarItem
    },
    computed: {
      routes () {
        return this.$router.options.routes
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-menu {
    border-right: none;
  }
</style>
