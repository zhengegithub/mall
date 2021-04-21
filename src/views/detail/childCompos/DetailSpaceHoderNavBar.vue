<template>
  <div class="space-hoder-wp">
    <nav-bar class="common-nav-bar">
      <div slot="left">
        <div class="icon-wp" @click="backClick">
          <i class="iconfont">&#xe604;</i>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
   components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
@import url("~assets/icon/back/iconfont.css");
/* .detail-nav-bar {
  background-color: #fff;
  background-color: #bfa;
  z-index: 999;
  position: relative;
} */
.icon-wp {
  display: inline;
  padding: 4px 7px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .6);
}
.common-nav-bar {
  box-shadow: none;
}
</style>