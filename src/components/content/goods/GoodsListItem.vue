<template>
  <div class="goods-list-item" @click="itemClick">
    <div class="goods-wp">
      <div class="img-wp">
        <img :src="showImage" alt="" @load="imgLoad"/>
      </div>
      <div class="title-wp">
        <p>{{ goodsItem.title }}</p>
      </div>
      <div class="price-wp">
        <span class="price-sp">￥{{ goodsItem.price }}起</span>
        <div class="collect">
          <i class="iconfont">&#xe6fb;</i>
          <span>{{ goodsItem.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    imgLoad() {
      this.$bus.$emit('homeGoodsLoad')
    }
  }
};
</script>

<style scoped>
@import url("~assets/icon/collect/iconfont.css");
.goods-list-item {
  padding-bottom: 15px;
  box-shadow: 0 0 3px rgb(218, 217, 217);
  margin-bottom: 8px;
  border-radius: 8px;
  /* 解决瀑布流商品信息折断问题 */
  height: 100%;
  overflow: auto;
}
.goods-wp {
  text-decoration: none;
  margin-bottom: 10px;
}
.img-wp img {
  width: 100%;
  border-radius: 8px 8px 0 0;
  vertical-align: middle;
}
.title-wp {
  padding: 10px;
}
.title-wp p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000;
  font-size: 12px;
}
.price-wp {
  display: flex;
  justify-content: space-between;
}
.price-sp {
  color: deeppink;
  font-weight: 600;
  font-size: 18px;
  padding-left: 5px;
}
.collect {
  color: rgb(161, 161, 161);
  padding-right: 5px;
}
.collect i {
  font-size: 18px;
}
.collect span {
  font-size: 14px;
}
</style>