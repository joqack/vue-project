import Vue from "vue";
import VueRouter from "vue-router";
import app from "../component/app.vue";
import home from "../component/home/home.vue";
import detail from "../component/detail/detail.vue";
import news from "../component/news/news.vue";
Vue.use(VueRouter);
new Vue({
    el: '#app',
    render(c){
        return c(app);
    },
    router: new VueRouter({
        routes: [
            {
                path: '/',
                component: home
            },
            {
                path: '/detail',
                component: detail
            },
            {
                path: '/news',
                component: news
            },
        ]
    }),
});