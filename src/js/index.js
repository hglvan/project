define(['jquery', 'cookie', 'lazyload', 'carfly'], function($, cookie, lazyload, carfly) {


    return {

        init: function() {
            //这里的路径是以js文件夹为基准的
            // 1、主页加载头部
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
            $('main').load('../src/html/index_main.html', function() {
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
                    $('.round span').eq(preIndex).attr("id", "lb_active").siblings().attr("id", "");
                }

                setInterval(next, time);
            })





            // 套路
            $(function() {

                // 设置tab切换

                // $('table img').onload(function(){

                $('.tab').on("mouseover", ">span", function() {

                        var idx = $(this).index();
                        $(this).addClass("tabbottom").css("color", "#00c8ff").siblings().removeClass("tabbottom").css("color", "")
                        $('.tabimg').children().hide().eq(idx).show();
                        $(".bigimg").attr("src", "../src/img/main/p" + idx + ".jpg")
                    })
                    // })

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


                //设置右侧导航条
                $('.sidebox').on('mouseover', 'li', function() {

                    $(this).addClass("side-active").siblings().removeClass("side-active");

                    $(this).click(function() {
                        var idx = $(this).index()
                        console.log(idx)
                        if (idx == 0) {
                            console.log($(window).scrollTop())
                            $('html,body').animate({
                                scrollTop: 0
                            }, 1000)
                        }

                    })

                })
                $('.sidebox').on('mouseout', 'li', function() {

                    $(this).removeClass("side-active");

                })



                $(window).scroll(function() {
                    var scrollY = this.scrollY;
                    // console.log($(document).scrollTop())
                    // console.log($('.sidebox').height())
                    if (scrollY > 300) {
                        var target = parseInt((window.innerHeight - $(".sidebox").height()) / 2) + scrollY - 300;
                        $(".sidebox").stop(true).slideDown();
                        // $(".sidebox").stop(true).animate({
                        //                  		"top": target
                        //             		 })

                    } else {
                        $(".sidebox").stop(true).slideUp('slow');
                    }


                })



                // 加载商品列表
                $.ajax({

                    type: "get",
                    url: "../src/php/goodslist.php",
                    dataType: "json",
                    success: function(data) {

                        $('.goodsul').html($.map(data, function(item) { //jQ中map遍历

                            return `<li class="datalist">

			<div class="goods_img">
			<img data-original="${item.imgurl}" height="350" width="350" alt="" class="hello" data-guid="${item.id}">
			<p class="yc"><a href="#">清洁</a><a href="#">保湿</a><a href="#">润肤</a></p>
			</div>
			<div class="goods_msg">
				<p>${item.name}</p>
				<div class="goods_buy clear">
					<p class="goods_buy_l"><i>￥</i><span class="jiage">${item.price}</span></p>
					<p class="goods_buy_r"><button class="goods_car buycar">加入购物车</button></p>

				</div>
					<div class="tg">
					<p class="tg_l" style="float:left">
					<i></i><i>距团购结束</i><i class="buytime"></i></p>
					<p class="tg_r" style="float:right">
						<i>342人已购买</i>
					</p>
					</div>
			</div>
		</li>`
                        }).join(""));


                        //懒加载
                        $(".hello").lazyload({
                            effect: "fadeIn"
                        });




                        // 购物车飞入效果
        $('.buycar').on('click', function(event) {

                            var img = $(this).parents('li').find('img').attr('src');
                            console.log(this)
                            var offset = $('#end').offset(),
                                flyer = $('<img class="u-flyer" src="' + img + '"/>');
                            flyer.fly({
                                start: {
                                    left: event.clientX,
                                    top: event.clientY
                                },
                                end: {
                                    left: offset.left,
                                    top: offset.top - window.scrollY
                                        // width: 20,
                                        // height: 20
                                }
                            });

                            var js = $('.js').html();
                            js++;
                            $('.js').html(js);
                            // 商品加载入购物车
                            var imgclone = $(this).parents('li').find('img').clone()[0].src;
                            var priceclone = $(this).parents('li').find('.jiage').html();
                            // var oli = $('.oli').eq(0).clone();
                            var oli = $(`<li class="clear oli">
		<div class="carimg"><img src="../src/img/main/1.jpg" ></div>
		<div class="carbox_inp">
		<p style="font-size:15px;margin-bottom:10px">贝德玛皙妍倍护防晒喷雾SPF30+200ml</p><span style="float:left;color:#ff643c;font-size:20px;">￥</span>
		<span style="float:left;color:#ff643c;font-size:20px;margin-right:8px" class="listprice">${priceclone}</span><p class="car_k"><span style="float:left;color:#ccc">-</span><input type="text" class="carnum" value="0" ><span style="float:right;color:#ccc">+</span ></p><a class="cardel" style="float:left;color:#000;margin-left:5px;font-size:13px;height:24px;display:inline-block;line-height: 35px;cursor:pointer">删除</a></div>		
		</li>`)

                            $('.carboxlist').append(oli);
                            oli = oli.find('img').attr("src", imgclone).find('.listprice').html(priceclone);
                            // $('.listprice').html(priceclone);
                            // oli = $(this).html(priceclone);
                            console.log(priceclone)
                            // 计算当前总价格
                            var count = 0;
                            $('.oli').each(function(idx, item) {

                                count += parseInt($(this).find('.listprice').html())


                            })
                            $('.countpri').html(count)


                            // 点击删除时重新计算价格与数量
                            $('.carboxlist').on('click', '.cardel', function() {
                                var count = 0;
                                $(this).parents(".oli").remove();
                                $('.oli').each(function(idx, item) {

                                        count += parseInt($(this).find('.listprice').html())


                                    })
                                    // 重新计算价格
                                $('.countpri').html(count)
                                    // 重新计算商品数量
                                js--;
                                $('.js').html(js);


                            })






             var carlist = getCookie('carlist');    //不定义空数组，是为了匹配数量问题，所以直接获取cookie来匹配是否存在
			carlist = carlist ? JSON.parse(carlist) : [];    //一开始如果没存在cookie,则返回为空字符，但是JSON.parse不能识别空字符，所以会报错，因此要先判断
		
			var currentLi =  $(this).parents('.content_list');
            var datalist =  $(this).parents('.datalist');
			// console.log(datalist.find('img')[currentSrc])
			var currentGUID = currentLi.attr('data-guid');
			var hasGoods = false;
			for(var i=0;i<carlist.length;i++){
				if(carlist[i].guid === currentGUID){
							hasGoods = true;

							// 如果当前商品已经存在cookie中，则商品数量+1
							carlist[i].qty++;
							break;  //需要得到值就立即结束的情况，则用for循环，其他循环不能提前终止
						}
					}			

				if(!hasGoods){
						
						var goods = {
							guid:currentGUID,
							name:currentLi.find('p').eq(0).html(),
							price:currentLi.find('.jiage').html(),
							imgurl:currentLi.find('img').attr('src'),
							qty:1
						};

						// 把当前商品信息写入carlist
						carlist.push(goods);
					}

                   
                    setCookie('carlist',JSON.stringify(carlist),5,'/');
                    
					
				
		


              })


        
                        // 跳转到购物车页面
                        $('.precar').click(function(){
                            // location.href="./car.html";
                              window.open("./car.html","_blank");
                        })




                        $('.hello').click(function() {

                            location.href = "detpage.html?id=" + $(this).attr('data-guid')


                        })





                    }
                })










                $('.preonli').hover(function() {

                    $('.preson').show();
                    console.log(88)
                }, function() {

                    $('.preson').hide()
                    console.log(99)
                })



                $('.gwczt').click(function() {
                    if ($('.carbox').css('display') == 'none') {
                        $('.carbox').show();
                    } else {
                        $('.carbox').hide();
                    }


                })






                // goods.onclick = function(e){
                // 	e = e || window.event;
                // 	var target = e.target || e.srcElement;

                // 	// 点击按钮添加
                // 	if(target.tagName.toLowerCase() === 'button'){
                // 		// 线获取当前li
                // 		var currentLi = target.parentElement.parentElement;

                // 		// 点击添加按钮时，是添加还是修改数量
                // 		var currentGUID = currentLi.getAttribute('data-guid');

                // 		// cookie中是否存在当前商品
                // 		var hasGoods = false;
                // 		for(var i=0;i<carlist.length;i++){
                // 			if(carlist[i].guid === currentGUID){
                // 				hasGoods = true;

                // 				// 如果当前商品已经存在cookie中，则商品数量+1
                // 				carlist[i].qty++;
                // 				break;  //需要得到值就立即结束的情况，则用for循环，其他循环不能提前终止
                // 			}
                // 		}

                // 		if(!hasGoods){

                // 			var goods = {
                // 				guid:currentGUID,
                // 				name:currentLi.children[1].innerText,
                // 				price:currentLi.children[2].innerText,
                // 				imgurl:currentLi.children[0].src,
                // 				qty:1
                // 			};

                // 			// 把当前商品信息写入carlist
                // 			carlist.push(goods);
                // 		}

                // 		setCookie('carlist',JSON.stringify(carlist));
                // 	}
                // }

















            })




















            //加载尾部
            $('footer').load('../src/html/footer.html', function() {

            })



        }
    }
})
