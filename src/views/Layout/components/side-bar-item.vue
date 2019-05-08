<template>
  <div>
      <el-submenu v-if="opt.children&&!opt.hidden" :index="opt.path">
        <template slot="title">{{opt.meta.title}}</template>
        <side-bar-item :opt="item" :key="index" v-for="(item, index) in opt.children"></side-bar-item>
      </el-submenu>
      <el-menu-item v-if="!opt.children&&!opt.hidden">
        {{opt.meta.title}}
      </el-menu-item>
  </div>
</template>

<script>
  export default {
    name: "side-bar-item",
    props: {
      opt: Object
    }
  }
</script>

<style scoped>

</style>
