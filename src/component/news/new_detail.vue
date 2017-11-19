<template>
    <div id="tbl">
         <app-title v-bind:tit='title'></app-title>
        <div class="main">
            <div class="title">
                <h3>{{ newDetail.title }}</h3>
                <div class="description">
                    <span class='time'>{{ newDetail.add_time | formatTime }}</span>  
                    <span class="visit">{{ newDetail.click}} 次浏览</span>  
                    <span class="class">分类：经济民生</span>
                </div>
            </div>
            <div class="content" v-html="newDetail.content">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:{
                  tit:  this.$route.params.newid?'图文详情':'图文资讯',
                  url:  this.$route.params.newid?'/new/list':'/',
                },
                newDetail:[]
            }
        },
        methods:{
            getDetai(){
                this.axios.get(`${this.api.newDetail}/${this.$route.params.newid}`)
                .then(
                    res=> {console.log(res.data.message[0])
                    this.newDetail=res.data.message[0];
                    }, 
                );
            }
        },
        created(){
            this.getDetai();
        }
    }
</script>

<style lang='less' scoped>
#tbl{
    width: 100%;
}
    .main{
        width: 100%;
        background-color: #fff;
        .title{
        border-top: 2px solid #ccc;
        border-bottom: 1px solid rgb(248,248,248);
        padding: 5px 2px;
        .description{
            margin: 5px 0;
            font-size: 12px;
        }
        h3{
            font-size: 19px;
        }
        }
        .content{
            width: 100%;
            overflow: hidden;
        }
    }

</style>