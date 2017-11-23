const http='http://vue.studyit.io/api'

export default {
    lunbo:`${http}/getlunbo`,
    // 新闻
    newlist:`${http}/getnewslist`,
    newDetail:`${http}/getnew`,

    // 图片list
    photoL:`${http}/getimages/`,
    photoC:`${http}/getimgcategory`,
    // 图片detail
    photoImg:`${http}/getthumimages/`,   
    photoD:`${http}/getimageInfo/`, 
    //商品列表
    goodsL: `${http}/getgoods`,
    goodsD: `${http}/goods/getdesc`,
     //商品列表详情
     goodsP: `${http}/goods/getinfo/`,
    //  评论
    goodsC: `${http}/getcomments/`,
    goodsDesc: `${http}/goods/getdesc/`,
    //购物车
    shopC: `${http}/goods/getshopcarlist/`,
       
}