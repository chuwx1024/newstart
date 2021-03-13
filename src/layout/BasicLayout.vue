<template>
  <div class="basicLayout-container">
    <el-container>
      <el-aside width="200px">
        <h5>导航菜单</h5>
          <el-menu router>
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/icon">
                <i class="el-icon-document"></i>
                <span slot="title">图标页面</span>
            </el-menu-item>
            <el-menu-item index="/about">
                <i class="el-icon-document"></i>
                <span slot="title">关于页面</span>
            </el-menu-item>
            <el-submenu index="/echarts">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图表</span>
              </template>
                <el-menu-item index="/echarts/line">
                  折线图
                </el-menu-item>
                <el-menu-item index="/echarts/pie">
                  饼图
                </el-menu-item>
            </el-submenu>
            <!-- self -->
            <el-submenu index="/find">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>匹配对象</span>
              </template>
              <el-menu-item-group>
                <template slot="title">匹配12</template>
                <el-menu-item index="/find/one">1</el-menu-item>
                <el-menu-item index="/find/two">2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">匹配34</template>
                <el-menu-item index="/find/there">3</el-menu-item>
                <el-menu-item index="/find/four">4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- self -->
          </el-menu>
      </el-aside>
      <el-main>
        <!-- 这里是路由放置的坑------------------------------ -->
        <router-view />
        <!-- 这里是路由放置的坑------------------------------ -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'basicLayout'

}
</script>

<style lang='less' scoped>
   .basicLayout-container {

   }

</style>
