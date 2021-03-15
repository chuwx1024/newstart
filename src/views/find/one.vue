<template>
  <div class="adbox">
    <h3>广告数据列表</h3>
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline"  >
        <el-form-item label="数据ID :">
          <el-input size='small' v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="数据名称 :">
          <el-input size='small' v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="数据标签 :">
          <el-input size='small' v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="状态 :">
          <el-select size='small' v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size='small' type="primary" @click="onSubmit">查&nbsp;&nbsp;询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="small"  @click="onSubmit">重&nbsp;&nbsp;置</el-button>
        </el-form-item>
        <el-form-item size="large">
          <el-button size="small" type="primary" @click="onSubmit">发布广告数据</el-button>
        </el-form-item>
      </el-form>
      <!-- table---------------- -->
      <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          prop="ID"
          label="数据ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="dataname"
          label="数据名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="request"
          label="收到申请">
        </el-table-column>
        <el-table-column
          prop="beused"
          label="被使用">
        </el-table-column>
        <el-table-column
          prop="critic"
          label="收到评价">
        </el-table-column>
        <el-table-column
          prop="state"
          label="操作">
           <router-link to="/find/four">详情</router-link>
           <router-link to='/find/four'>发布</router-link>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      formInline: {
        user: '',
        regin: ''
      },
      tableData: [{
        ID: 'JH202012011202',
        dataname: '信用卡信息',
        date: '2016-05-02',
        state: '未发布',
        request: 3,
        beused: 2,
        critic: 0
      }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({ name: 'Four' })
    }
  }
}
</script>

<style scoped  lang="less">
.adbox {
  h3 {
    height: 50px;
    line-height: 50px;;
    background-color: white;
  }
  .el-input {
    width: 160px;
    margin-right: 30px;
  }
  .el-select {
    width: 160px;
    margin-right: 30px;
  }
  .el-form-item {
    font-weight: 700;
  }
  .cell a {
    text-decoration: none;
  }
  .cell a:last-child {
    margin-left: 15px;
  }
}

</style>
