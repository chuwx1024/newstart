<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是chuhx添加的代码</h2>
    <h2>这是cwx添加的代码</h2>
    <h5>下边的豆芽还是可以点击的</h5>
    <router-link to='/icon'>我可以去豆芽</router-link>
    <hr>
    <el-button
      type="primary"
      @click="goToIconByName"
    >
      我也可以去豆芽
    </el-button>
    <hr>
    <el-button
      type="success"
      @click="goToIconByPath"
    >
      我还是可以去豆芽
    </el-button>
    <hr>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
Vue.use(Button)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    goToIconByName () {
      this.$router.push({ name: 'Icon' })
    },
    goToIconByPath () {
      this.$router.push({ path: '/icon' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
.icon-baoxincai path {
  font-size: 60px;
  color: red;
}
</style>
