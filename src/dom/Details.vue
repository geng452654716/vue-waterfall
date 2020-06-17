<template>
  <div class="details">
    这里是详情页
    <img :src="imgName" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    imgName() {
      return this.$route.query.img
    }
  }
}
</script>

<style lang="less" scoped>
.details {
  height: 5000px;
}
</style>
