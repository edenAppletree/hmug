<template>
  <view>
    <van-card :thumb-link='`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`' v-for="item in goods"
      :key="item.goods_id" :thumb="item.goods_small_logo || defaultPic" :title='item.goods_name'
      :price='item.goods_price|toFixed'>
    </van-card>
  </view>
</template>

<script>
  import {
    getGoodsList
  } from '../../api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        total: 0,
        goods: [],
        isLoading: false,
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      // 获取商品列表
      async getGoodsList(stopPullDown) {
        this.isLoading = true
        const {
          total,
          goods
        } = await getGoodsList(this.queryData)
        this.isLoading = false
        this.total = total
        this.goods = [...this.goods, ...goods]
        // 数据请求成功以后，判断是下拉刷新，还是上拉刷新，是下拉刷新的话有关闭下拉刷新的回调，上拉刷新的话没有回调
        stopPullDown && stopPullDown()
      }
    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.getGoodsList()
    },
    onPullDownRefresh() {
      this.queryData = {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        this.total = 0,
        this.goods = [],
        this.getGoodsList(() => {
          uni.stopPullDownRefresh()
        })
    },
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toast.err('没有更多了')
      // isLoading为true的时候表示加载中，就不再执行下面的重新获取加载的事件，节流
      if (this.isLoading) return
      this.queryData.pagenum++
      this.getGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
