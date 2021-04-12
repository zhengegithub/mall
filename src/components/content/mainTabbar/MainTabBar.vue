<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe632;</i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe632;</i>
        <span slot="tab-bar-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/classify" activeColor="deeppink">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe609;</i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe609;</i>
        <span slot="tab-bar-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="deeppink">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe603;</i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe603;</i>
        <span slot="tab-bar-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe60b;</i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe60b;</i>
        <span slot="tab-bar-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>