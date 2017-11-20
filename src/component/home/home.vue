<template>
  <article>
      <mt-swipe :auto="10000">
          <mt-swipe-item v-for="item in lunbos" v-bind:key='item.url'>
              <a :href='item.url'>
                  <img :src="item.img" alt="">
              </a>
          </mt-swipe-item>
      </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">首页</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/new/list">
                <span class="mui-icon mui-icon-chat"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">热点新闻</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/list/0">
                <span class="mui-icon mui-icon-image"></span>
                <div class="mui-media-body">图片分享</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">搜索</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">关于我们</div></router-link>
        </li>
        
	    </ul>
  </article>
</template>


<script>
export default {
  data() {
    return {
      lunbos: []
    };
  },
  methods: {
    getLunbo() {
      this.axios
        .get(this.api.lunbo)
        .then(res => (this.lunbos = res.data.message));
    },
  },
  created() {
    this.getLunbo();
  }
};
</script>
    
<style lang='less' scoped>
@height:260px;
article {
  height: @height;
  img {
    height: @height;
  }
}
</style>