<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    // time = 300 是给的time的一个默认值
    backTop(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // scrollY: true,
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      observeImage: true,
      
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("isShowPosithon", position);
    });
    this.scroll.on("pullingUp", () => {
      // console.log("ddddddddddddddddddddddd");
      this.$emit("loadMore");
        this.scroll.finishPullUp();
      // setTimeout(() => {
      // },2000);
    });
    
  },
};
</script>

<style scoped>

</style>