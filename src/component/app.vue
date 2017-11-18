<template>
    <div class="body">
          <app-header></app-header>
            <app-home></app-home>
          <app-footer></app-footer>
    </div>
</template>

<<script>
import lunboComponent from "./home/home.vue";
export default {
  components:{
      'app-home':lunboComponent,
  }
}
</script>

