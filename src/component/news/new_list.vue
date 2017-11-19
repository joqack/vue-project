<template>
    <main>
         <app-title v-bind:tit='title'></app-title>
        <ul class="mui-table-view" v-for='item in newList' v-bind:key="item.id">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="{ path:`/new/detail/${item.id}`}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                           <span class="ctime">发表时间：{{ item.add_time | formatTime }}</span>
                           <span class="count">点击：{{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        data(){
          return{
              title:{
                  tit:  this.$route.params.newid?'图文详情':'图文资讯',
                  url:  this.$route.params.newid?'/new/list':'/',
                },
            newList:[],
          }  
        },
        methods:{
            getNewList(){
                this.axios.get(this.api.newlist)
                .then(
                    res => {this.newList=res.data.message},
                );
            },
        },
        created(){
            this.getNewList();
        },
    }
</script>

<style lang='less' scoped>
main {
    .mui-ellipsis{
        color: rgb(108,192,252);
       font-size: 14px;
        overflow: hidden;
        .ctime{
            float: left;
        }
        .count{
            float: right;
        }
    }
    .mui-media-body{
        // word-wrap: break-word;
        // word-break:break-all;
        white-space:normal;
        font-size: 14px;
    }
}

</style>