<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是chuhx添加的代码</h2>
    <h2>这是cwx添加的代码</h2>
    <router-link to='/douya'>豆芽</router-link>
    <router-view></router-view>
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
