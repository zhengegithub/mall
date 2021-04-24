<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left">
        <div class="icon-wp" @click="backClick">
          <i class="iconfont">&#xe604;</i>
        </div>
      </div>
      <div slot="meddle" class="meddle-title-wp">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="meddle-title"
          :class="{ showActiveTitle: index === activeTitle }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "评价", "详情", "推荐"],
      activeTitle: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.activeTitle = index;
      this.$emit("titleClick", index);
    },
    backClick() {
       this.$router.back()
    },
  },
};
</script>

<style scoped>
@import url("~assets/icon/back/iconfont.css");
.detail-nav-bar {
  background-color: #fff;
  z-index: 999;
  position: relative;
}
.meddle-title-wp {
  display: flex;
  justify-content: space-around;
}
.meddle-title {
  font-size: 14px;
}
.showActiveTitle {
  color: #3EC0BE;
}
.icon-wp {
  display: inline;
  padding: 4px 7px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>