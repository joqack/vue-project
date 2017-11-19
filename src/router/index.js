import homeComponent from "../component/home/home.vue";
import newListComponent from "../component/news/new_list.vue";
import newDetailComponent from "../component/news/new_detail.vue";

export default {
    routes:[
        {path:'/',redirect:'/index'},
        {name:'i',path:'/index',component:homeComponent},
        {name:'nl',path:'/new/list',component:newListComponent},
        {name:'nd',path:'/new/detail/:newid',component:newDetailComponent},
    ]
}