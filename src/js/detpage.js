define(['jquery','cookie','gdszoom'], function($,cookie,gdszoom) {


    return {

        init: function() {

            // 加载公共头部
            $('header').load('../src/html/top.html', function() {


                if (getCookie('login')) {
                    var sCookie = getCookie('login');
                    var aUser = sCookie ? JSON.parse(sCookie) : [];
                    $('#login').attr("href", "").html('<span>欢迎您:<span style="color:#00c8ff">' + aUser.username + '</span></span><a href="#" id="out">[退出]</a>');

                }
                $('#out').click(function() {
                    console.log(1111)

                    // cookie.removeCookie('login');
                    removeCookie('login');
                    // location.href = "../src/detpage.html";
                    location.reload();

                })



                //设置下拉微信
                $(".uu").hover(function() {

                        $(".wx").stop(true).slideDown();

                    }, function() {

                        $('.wx').slideUp();
                    })
                    //设置下拉我的小锅
                $(".home").hover(function() {

                        $(".xg").stop(true).slideDown();

                    }, function() {

                        $('.xg').slideUp();
                    })
                    //设置我的下拉服务
                $(".server").hover(function() {

                    $(".myserver").stop(true).slideDown();

                }, function() {

                    $('.myserver').slideUp();
                })

                // 设置切换gif动态图

                $(".sz").hover(function() {

                    $(this).find("img").attr("src", "../src/img/header/home_overseas_current.gif")
                }, function() {

                    $(this).find("img").attr("src", "../src/img/header/home_overseas.gif")
                })


                //设置下拉菜单             
                $(".na").hover(function() {
                    $(this).addClass('top_f_active');
                    $(".navlist").stop(true).slideDown();
                }, function() {
                    $(this).removeClass('top_f_active');
                    $(".navlist").slideUp();
                })



                //设置导航条右侧
                $('.top_f_r').find("li").hover(function() {

                    $(this).stop(true).animate({
                        "width": 130
                    })
                }, function() {
                    $(this).stop(true).animate({
                        "width": 27
                    })
                })
            })


            



     $('main').load('../src/html/det_page.html', function() {

             
         $(function(){

              // 倒计时
                function addZero(i){
                        if(i<10){
                            i = "0" + i;
                        }
                            return i;
                        }

                (function showtime() {

                    var nowtime = new Date();
                    var endtime = new Date("2017/05/15");
                    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
                    var d = parseInt(lefttime / (24 * 60 * 60));
                    var h = parseInt(lefttime / (60 * 60) % 24);
                    var m = parseInt(lefttime / 60 % 60);
                    var s = parseInt(lefttime % 60);
                    h = addZero(h);
                    m = addZero(m);
                    s = addZero(s);
                    $(".buytime").html( d + "天" + h + "小时" + m + "分" + s+"秒").css("color","red");
                    if(lefttime<=0){
                        clearInterval(time)
                    $(".buytime").html("活动已结束");
                        return;
                    }
                    var time = setInterval(showtime,1000);
                })()









            $('.zoom').gdszoom({
                position:'right'
            });


            

            $(window).on('scroll',function(){
                 var scrollY = this.scrollY;
                 if(scrollY >= 1153){
                    $('.fixed').css({'position':"fixed","top":0})

                 }else{
                       console.log(22);
                       $('.fixed').css('position','');
                 }


            })
            
            

                function GetRequest() {
                    var url = location.search;   
                    if (url.indexOf("?") != -1) {  
                        var str = url.substr(1);
                        var strArr = str.split('=');
                        var id = strArr[1]
                        console.log(id);
                    }
                    return id;
                } 
                $.ajax({
                    type:"get",
                    url:"../src/php/goodslist.php",
                    success:function(data){
                        var oJson = JSON.parse(data);
                        getJson(oJson);
                    },
                    async:true
                });

                function getJson(oJson){
                    var gid = GetRequest();

                    for(var i=0;i<oJson.length;i++){
                        if(oJson[i].id==gid){
                            // var name = oJson[i].name;
                            // var type = oJson[i].type;
                            // var imgurl = oJson[i].imgurl;
                            // var price = oJson[i].price;
                            // var a1_img = oJson[i].img_x1;
                            // var a2_img = oJson[i].img_x2;
                            // var a3_img = oJson[i].img_x3;
                            // $('.dior').html(name);
                            // $('.type').html(type);
                            // $('.smallPic').html(imgurl);
                            // $('.prices').html(price);
                            // $('.a0_img').html(imgurl);
                            // $('.a1_img').html(a1_img);
                            // $('.a2_img').html(a2_img);
                            // $('.a3_img').html(a3_img);
                            $('.zoom img').attr('src',oJson[i].imgurl).attr('data-big','../src/img/detpage/big'+oJson[i].id+'.jpg');
                             $('.det_pirce span').eq(1).html(oJson[i].price)
                        }
                    }
                }
          









        })








        })

            $('footer').load('../src/html/footer.html', function() {



            })



        }
    }
})
