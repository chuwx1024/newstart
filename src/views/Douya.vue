<template>
  <div class="douya-container">
    <svg class="icon baoxincai-icon" aria-hidden="true">
        <use xlink:href="#icon-baoxincai"></use>
      </svg>
      <svg class="icon lvdouya-icon" aria-hidden="true">
        <use xlink:href="#icon-lvdouya"></use>
      </svg>
  </div>
</template>

<script>
export default {
  name: 'DouYa'
}
</script>
<style lang="less" scoped>
.douya-container {
  .baoxincai-icon {
    font-size: 66px;
  }
  .lvdouya-icon {
    font-size: 100px;
    margin-left: 30px;
  }
}

</style>
