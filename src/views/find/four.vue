<template>
  <el-card class="box-card">
    <el-form ref="formID" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="数据名称 :" prop="dataname">
        <el-input placeholder="请输入" v-model="form.dataname"></el-input>
      </el-form-item>
      <el-form-item label="数据描述 :" prop="desc">
        <el-input placeholder="请输入" type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="数据标签 :">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <span>标签最多设置30个</span>
      </el-form-item>
      <el-form-item label="特征分类 :">
        <el-input placeholder="性别，年龄..." type="textarea" v-model="form.featureType"></el-input>
      </el-form-item>
      <el-form-item label="开放范围 :">
        <el-radio-group v-model="form.radio">
          <el-radio :label="3">全部用户可见</el-radio>
          <el-radio :label="6">对部分用户可见</el-radio>
          <el-radio :label="9">对部分用户不可见</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="输入企业名称"
          v-model="input"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small"  @click="onSubmit">取消</el-button>
        <el-button size="small" type="primary" @click="onSubmit">保存</el-button>
        <el-button size="small" type="primary" @click="onSubmit">保存并发布</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        dataname: '',
        desc: '',
        region: '',
        featureType: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        radio: 6
      },
      rules: {
        dataname: [
          { required: true, message: '请输入数据名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入数据描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.formID.validate((valid) => {
        if (valid) {
          alert('submit!')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
span {
  font-size: 12px;
  color: #999;
  margin-top: -10px;
  margin-bottom: -20px;
  display: block;
}

</style>
