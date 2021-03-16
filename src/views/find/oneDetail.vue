<template>
  <div class="oneDetail-container">
    <span>这些就是路由传递过来的参数: </span>{{this.$route.params.rowData}}
    <hr>
    <div>
        <label for="">数据ID:</label><span>{{ID}}</span>
    </div>
    <div>
        <label for="">数据名称:</label><span>{{dataname}}</span>
    </div>
    <div>
        <label for="">发布日期:</label><span>{{date}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'oneDetail',
  data () {
    return {
      ID: this.$route.params.rowData.ID,
      dataname: this.$route.params.rowData.dataname,
      date: this.$route.params.rowData.date
    }
  }

}
</script>
