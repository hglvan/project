

// 对模块化加载进行基本设置
requirejs.config({
    // baseUrl:"js",
    //设置依赖
    shim:{
        'common_jquery':['jquery'],
        'lazyload':['jquery'],
        'carfly':['jquery'],
        'gdszoom':['jquery']
    },

    //加载路径和加载对象,省略后缀
    paths:{
        'jquery':'../lib/jquery-3.1.1',
        'cookie':'../lib/cookiebase',
        'lazyload':'../lib/jquery.lazyload',
        'carfly'  : '../lib/jquery.fly.min',
        'gdszoom':'../lib/jquery.gdszoom'
        // 'common':'../lib/common'
       
    }
    // ,
    // waitSeconds:0

    
})


//require 属于按需加载

require(["jquery","index","register","login","detpage","car"],function($,index,register,login,detpage,car){
   
    var path = location.pathname;
    // console.log(path)
   // login.init();
   // detpage.init()
    if(path=="/project/src/index.html"){
            index.init();
    }else if(path=="/project/src/register.html"){
            register.init()
    }else if(path=="/project/src/login.html"){
            login.init()
    }else if(path=="/project/src/detpage.html"){
            detpage.init()
    }else if(path=="/project/src/car.html"){
            car.init()
 }else{
  index.init();
  
 }
   
    //如果想要添加新的页面

    //1 建一个文件夹 放入index.html
    //2 建一个新的模块 在模块里面对页面进行设置
    //3 在入口js 设置访问路由
})


