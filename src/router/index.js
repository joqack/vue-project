import homeComponent from "../component/home/home.vue";
// 新闻
import newListComponent from "../component/news/new_list.vue";
import newDetailComponent from "../component/news/new_detail.vue";
// 图片
import photoListComponent from "../component/photo/photoList.vue";
import photoDetailComponent from "../component/photo/photoDetail.vue";
//引入商品相关文件
import GLComponent from  "../component/goods/goods_list.vue";
import GDComponent from  "../component/goods/goods_detail.vue";
//购物车
import shopCComponent from  "../component/shopcart/shopCart.vue";


export default {
    linkActiveClass:'mui-active',
    routes:[
        {path:'/',redirect:'/index'},
        {name:'i',path:'/index',component:homeComponent},
        // 新闻
        {name:'nl',path:'/new/list',component:newListComponent},
        {name:'nd',path:'/new/detail/:newid',component:newDetailComponent},
        // 图片
        {name:'pl',path:'/photo/list/:photoid',component:photoListComponent},
        {name:'pd',path:'/photo/detail/:photoid',component:photoDetailComponent},
        //商品列表
        {name:'gl',path:'/goods/list/',component:GLComponent},
        {name:'gd',path:'/goods/detail/:id',component:GDComponent},
        //购物车
        {name:'gc',path:'/shop/cart/',component:shopCComponent},
        
    ]
}