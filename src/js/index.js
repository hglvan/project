define(['jquery','cookie'], function($,cookie) {


    return {

        init: function() {
            //这里的路径是以js文件夹为基准的
            // 1、主页加载头部
            $('header').load('../src/html/top.html', function() {


            	   if(getCookie('login')){
                    var sCookie = getCookie('login');
                 var aUser = sCookie ? JSON.parse(sCookie) : [];      
                  $('#login').attr("href","").html('<span>欢迎您:<span style="color:#00c8ff">'+aUser.username+'</span></span><a href="#" id="out">[退出]</a>');
                 
                }
				$('#out').click(function(){
                  	console.log(1111)
                  		
                  		// cookie.removeCookie('login');
                  		removeCookie('login');
                  		 location.href = "../src/index.html";

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

			// 2、加载内容
			$('main').load('../src/html/index_main.html',function(){
                var currentIndex = 0,
                    time = 3000,
                    length = $('.images').length;
                   
                $('.images:not(:first)').hide();

                function next() {
                    var preIndex = currentIndex;
                    currentIndex = ++currentIndex % length;
                    play(preIndex, currentIndex);
                 
                }

                function play(preIndex, currentIndex) {
                    $('.images').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
                    $('.round span').eq(preIndex).attr("id","lb_active").siblings().attr("id","");
                }    
                   
                  setInterval(next, time);           
			})






				// $(function(){

					// function addZero(i){
					// 		if(i<10){
					// 			i = "0" + i;
					// 		}
					// 			return i;
					// 		}

					// (function showtime() {

					// 	var nowtime = new Date();
					// 	var endtime = new Date("2017/05/12");
					// 	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
					// 	var d = parseInt(lefttime / (24 * 60 * 60));
					// 	var h = parseInt(lefttime / (60 * 60) % 24);
					// 	var m = parseInt(lefttime / 60 % 60);
					// 	var s = parseInt(lefttime % 60);
					// 	h = addZero(h);
					// 	m = addZero(m);
					// 	s = addZero(s);
					// 	$(".buytime").html( d + "天" + h + "小时" + m + "分" + s+"秒");
					// 	if(lefttime<=0){
					// 	    clearInterval(time)
					// 	$(".buytime").html("活动已结束");
					// 	    return;
					// 	}
					// 	var time = setInterval(showtime,1000);
					// })()

				// })

							

			$(function(){

				// 设置tab切换
				
				$('.tabimg').children().eq(0).show()

				$('.tab').on("mouseover",">span",function(){

						var idx = $(this).index();
						$(this).addClass("tabbottom").css("color","#00c8ff").siblings().removeClass("tabbottom").css("color","")
						$('.tabimg').children().hide().eq(idx).show();
						$(".bigimg").attr("src","../src/img/main/p"+idx+".jpg")


				})

})



























			//加载尾部
			$('footer').load('../src/html/footer.html',function(){				 
              
			})



        }
    }
})
