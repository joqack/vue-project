


<template>
  <div>
      <h1>{{ title}}</h1>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data:function(){
      return {
          title:'这是一个vue组件的首页'
      }
  }
}
</script>

<style>
h1{
    color: red;
}
</style>


