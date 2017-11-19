<template>
    <header data-v-218120be="" class="mint-header">
            <div class="mint-header-button is-left">
                <router-link data-v-218120be="" :to="{path:tit.url}" class="router-link-active">
                    <button data-v-218120be="" class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon">
                            <i class="mintui mintui-back"></i>
                        </span> 
                        <label class="mint-button-text">返回</label>
                    </button>
                </router-link>
                </div> <h1 class="mint-header-title">{{ tit.tit }}</h1> <div class="mint-header-button is-right">
            </div>
        </header>
</template>

<script>
    export default {
        props:['tit']
    }
</script>

<style lang='less' scoped>
    header.mint-header{
        background-color: #eee;
        a,h1{
            color:rgb(99,168,249);
        }
    }
</style>