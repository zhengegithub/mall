<template>
  <div class="zero">
    <!-- <h2 class="time">{{ count }}</h2> -->
    <img src="~assets/img/logo/logo2.png" alt="" />
    <svg class="ring-container" :style="`width: ${size}; height: ${size}`">
      <circle
        :cx="cx"
        :cy="cx"
        :r="r"
        :stroke="backgroundColor"
        :stroke-width="width"
        stroke-linecap="round"
        fill="none"
      ></circle>
      <circle
        :cx="cx"
        :cy="cx"
        :r="r"
        class="ring"
        :stroke-width="width"
        :stroke="color"
        :stroke-dasharray="`${circum}`"
        stroke-linecap="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dashoffset"
          :from="circum"
          :to="endCircum"
          :dur="originCountDown"
        />
      </circle>
      <text
        :x="cx + 5"
        :y="cx + 10"
        text-anchor="end"
        :font-size="fontSize + 5"
        :fill="fontColor"
      >
        {{ countDown }}
      </text>
      <text
        :x="cx + 5"
        :y="cx + 10"
        text-anchor="start"
        :font-size="fontSize - 5"
        :fill="fontColor"
      >
        s
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "", //倒计时
      endCircum: 0,
      countDown: this.originCountDown,
    };
  },
  created() {
    const timejump = 4;
    if (!this.timer) {
      this.count = timejump;
      this.show = false;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= timejump) {
          this.count--;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
          //跳转的页面写在此处
          this.$router.push({ path: "/home" });
        }
      }, 1000);
    }
  },
  computed: {
    cx() {
      // 中心点位置
      return this.size / 2;
    },
    r() {
      // 半径
      return this.size / 2 - this.width;
    },
    circum() {
      return parseInt(this.r * Math.PI * 2);
    },
  },
  props: {
    fontSize: {
      type: Number,
      default: 14,
    },
    size: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
      default: 4,
    },
    backgroundColor: {
      type: String,
      default: "#f0f0f0",
    },
    color: {
      type: String,
      default: "#3ec0be",
    },
    fontColor: {
      type: String,
      default: "#333",
    },
    originCountDown: {
      type: Number,
      default: 5,
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      let diff = "1";
      this.countDown -= diff;
      if (this.countDown <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  },
};
</script>

<style scoped>
.zero {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 999;
}
.zero img {
  width: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* bottom: 50%; */
}
.time {
  position: fixed;
  top: 10px;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  font-size: 20px;
}
.ring-container {
  position: fixed;
  top: 10px;
  bottom: 0;
  right: 0;
  margin-right: 20px;
}
.ring {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>