<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, time=2000) {
        this.isShow =true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },time)
      }
    }
  }

</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
</style>