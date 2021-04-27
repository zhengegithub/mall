<template>
  <tab-bar class="span-style">
      <tab-bar-item path="/home" activeColor="#62C4EE">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe632;
          <span>|</span>
        </i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe632;
          <span>|</span>
        </i>
        <!-- <span slot="tab-bar-text">首页</span> -->
        
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#62C4EE">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe609;
          <span>|</span>
        </i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe609;
          <span>|</span>
        </i>
        <!-- <span slot="tab-bar-text">分类</span> -->
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#62C4EE">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe603;
          <span>|</span>
        </i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe603;
          <span>|</span>
        </i>
        <!-- <span slot="tab-bar-text">购物车</span> -->
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#62C4EE">
        <i class="iconfont icon1" slot="tab-bar-icon">&#xe60b;</i>
        <i class="iconfont icon2" slot="tab-bar-icon-active">&#xe60b;</i>
        <!-- <span slot="tab-bar-text">我的</span> -->
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
 .span-style span{
   color: rgb(59, 58, 58);
   font-size: 18px;
   margin-left: 1px;
 }
</style>