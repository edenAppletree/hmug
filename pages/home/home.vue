<template>
  <view>
    <view class="topSearch">
      <view class="search_btn">
        搜索
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .topSearch {
    width: 750rpx;
    height: 100px;
    background-color: #c00000;
    display: flex;
    justify-content: center;
    overflow: hidden;

    .search_btn {
      width: 500rpx;
      height: 30px;
      margin-top: 50px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
