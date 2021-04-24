<template>
  <div class="tab-control">
    <div
      class="tab-control-wp"
      :class="{ active: index === activeIndex }"
      v-for="(item, index) in titles"
      :key="index"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.activeIndex = index
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  position: sticky;
}
.tab-control span {
  font-size: 16px;
  padding: 2px;
}
.active {
  color: #62C4EE;
}
.active span {
  border-bottom: 2px solid #3EC0BE;
}
</style>