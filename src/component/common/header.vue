<template>
    <header>
            <mt-header fixed title="传智播客黑马程序员Vuejs">
            
            <mt-button icon="back" v-if='$route.path!="/index"'  v-on:click='$router.go(-1)' slot="left"></mt-button>
            
        </mt-header>
        <i></i>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
header i {
  display: block;
  height: 40px;
}
</style>


