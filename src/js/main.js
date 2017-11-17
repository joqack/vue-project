import Vue from "vue";
import app from "../component/app.vue";

new Vue({
    el:'#app',
    render(c){
        return c(app);
    }
});