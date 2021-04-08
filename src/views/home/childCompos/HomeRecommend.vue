<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{item.title}}</span>
        <!-- <div>{{ item.title }}</div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend a {
  text-decoration: none;
  font-size: 13px;
  color: #000;
}
.recommend img {
  width: 65px;
  vertical-align: bottom;
  margin:5px 0 ;
}
.recommend span {
  display: inline-block;
  margin-bottom: 8px;
}
</style>