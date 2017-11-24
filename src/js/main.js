// from后面的路径, 如果含有./ ../那么就相对于当前文件找文件
// 如果没有, 那么就会去node_modules里面找对应的包
// 1.1 导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';  // 自动找到index.js引入
import  "mui/dist/css/mui.css";
import  "mui/examples/hello-mui/css/icons-extra.css";
import VueRouter from "vue-router";
import axios from "axios";
import vuePicture from "vue-picture-preview";
import Vuex from "vuex";

//引入全局css
import "../less/index.less";

// 引入filter
import filter from "../filter";

// 1.2 启用vue插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);
Vue.use(filter);
Vue.use(vuePicture);
Vue.use(Vuex);

//将axios放入原型中，直接可获取axios
Vue.prototype.axios=axios;
// 2.1 导入根组件
import AppComponent from '../component/app.vue';

//导入路由配置
import routerCfg from "../router";
//导入vuex配置
import store from "../vuex";

//导入api配置文件
import api from "../httpApi";

Vue.prototype.api=api;
// 2.2 渲染根组件, 启动项目
new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    },
    router:new VueRouter(routerCfg),
    store:new Vuex.Store(store),
});