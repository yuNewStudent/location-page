<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    :mode="mode"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu
      v-for='(item, index) in menus'
      :index="index + ''"
      :key='index'>
      <template slot="title">{{item.title}}</template>
      <el-menu-item
        v-for='(item, i) in item.group'
        :key="index+ i"
        :index="index + '-' + i"
        :route='goRoute(item.name)'
        @click='handleRoute(item.name)'>{{item.title}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: ['menus', 'mode'],
  data () {
    return {
      activeIndex: '0-0'
    }
  },
  methods: {
    goRoute (name) {
      return {
        name: name
      }
    },
    handleRoute (name) {
      this.$router.push({
        name: name
      })
    },
    // handleRouteHead (name) {
    //   this.$router.push({
    //     name: 'RealTimeLocation'
    //   })
    // }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  display: inline-block;
  border: none;
  background: transparent !important;
  // width: 80%;
  .el-submenu {
    font-size: 30px;
  }
  .el-menu-item {
    background: transparent !important;
  }
}
</style>
