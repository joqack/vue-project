import homeComponent from "../component/home/home.vue";
// 新闻
import newListComponent from "../component/news/new_list.vue";
import newDetailComponent from "../component/news/new_detail.vue";
// 图片
import photoListComponent from "../component/photo/photoList.vue";
import photoDetailComponent from "../component/photo/photoDetail.vue";


export default {
    routes:[
        {path:'/',redirect:'/index'},
        {name:'i',path:'/index',component:homeComponent},
        // 新闻
        {name:'nl',path:'/new/list',component:newListComponent},
        {name:'nd',path:'/new/detail/:newid',component:newDetailComponent},
        // 图片
        {name:'pl',path:'/photo/list/:photoid',component:photoListComponent},
        {name:'pd',path:'/photo/detail/:photoid',component:photoDetailComponent},
    ]
}