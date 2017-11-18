import Vue from "vue";
import appComponent from "../component/app.vue";

new Vue({
    el:'#app',
    render(createNode){
        return createNode(appComponent);
    },

});