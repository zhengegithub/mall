<template>
<div>
  <h2>详情页</h2>
  <h2>{{iid}}</h2>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      iid: null
    }
  },
  created() {
    // console.log(this.$route.params)
    this.iid = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>