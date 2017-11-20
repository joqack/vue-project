<template>
    <div id="tbl">
        <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<div >
						<h4>{{ newDetail.title }}</h4>
						 <p class='mui-ellipsis'>
                           <span class="ctime">发表时间：{{ newDetail.add_time | formatTime }}</span>
                           <span class="count">点击：{{ newDetail.click }}</span>
                        </p>
					</div>
				</div>
				
				<div class="mui-card-footer" v-html="newDetail.content" >
					
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
                newDetail:{},
            }
        },
        methods:{
            getDetai(){
                this.axios.get(`${this.api.newDetail}/${this.$route.params.newid}`)
                .then(
                    res=> {
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
.mui-card-media h4{
    color: #000 ;
}
.mui-card-footer{
    display: block;
}
  
</style>