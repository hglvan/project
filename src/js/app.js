

// 对模块化加载进行基本设置
requirejs.config({
    // baseUrl:"js",
    //设置依赖
    shim:{
        'common_jquery':['jquery'],
        'lazyload':['jquery'],
        'carfly':['jquery']
    },

    //加载路径和加载对象,省略后缀
    paths:{
        'jquery':'../lib/jquery-3.1.1',
        'cookie':'../lib/cookiebase',
        'lazyload':'../lib/jquery.lazyload',
        'carfly'  : '../lib/jquery.fly.min'
       
    }

    
})


//require 属于按需加载

require(["jquery","index","register","login"],function($,index,register,login){
   
    var path = location.pathname;
    // console.log(path)
   login.init()
    if(path=="/project/src/index.html"){
            index.init();
    }else if(path=="/project/src/register.html"){
            register.init()
    }
   
   //  if(path=="/tugouwang/app/index/index.html"){
   //      index_tgw.init();
   //  }else if(path=="/tugouwang/app/page/register.html"){
   //       // registerPage.init(); //没必要要了，集中到register了
   //       register.init();
        
   //  }else if(path=="/tugouwang/app/page/login.html"){
   //          loginPage.init()
   //  }
   // else{
   //      index_tgw.init();
   //  }
    //如果想要添加新的页面

    //1 建一个文件夹 放入index.html
    //2 建一个新的模块 在模块里面对页面进行设置
    //3 在入口js 设置访问路由
})


