define(['jquery','cookie'], function($,cookie) {


    return {

        init: function() {

            // 加载公共头部
            $('header').load('../src/html/top.html', function() {

                // 移出头部多余节点
                $(".top_f,.search,.cart,.rightcar").remove();
                var $img = $("<div class='bdimg' style='float:right'><img src='img/car/1.png'></div>")
                $(".top_c").append($img)

             if (getCookie('login')) {
                    var sCookie = getCookie('login');
                    var aUser = sCookie ? JSON.parse(sCookie) : [];
                    $('#login').attr("href", "").html('<span>欢迎您:<span style="color:#00c8ff">' + aUser.username + '</span></span><a href="#" id="out">[退出]</a>');

                }
                 $('#out').click(function() {
                    console.log(1111)

                    // cookie.removeCookie('login');
                    removeCookie('login');
                    location.href = "../src/car.html";

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
            })



            $('main').load('../src/html/car_main.html', function() {


            // 获取cookie值

            var goodslist = getCookie('carlist');

            // 把json字符串转换成js对象
            goodslist = goodslist ? JSON.parse(goodslist) : [];
          
            console.log(goodslist)
            // // 总价
            // var totalPrice = 0;

           $('.carl').html(goodslist.map(function(item){
                // totalPrice += item.price * item.qty;
                return `<li class="clear sq" data-guid="${item.guid}">
                        <div class="cargoods clear">
                        <div class="cargoodsimg"><img src="${item.imgurl}" alt=""></div>             
                        <div class="cargoodsms">${item.name}</div>            
                        </div>

                        <div class="cargoods_right clear">
                            <span style="color:red" class="je">${item.price}</span>
                            <span style="border: 1px solid #ccc;height:30px;width:62px;text-align:center;margin-bottom:-9px" class="clear">
                            <i style="color:#ccc;float:left">-</i><input type="text" class="carnum" value="${item.qty}" style="width:20px;text-align:center;height:28px;float:left;border:none" ><i style="color:#ccc;float:left">+</i >
                            </span>
                            <span>霸位符</span><span>674</span><span class="car_del" style="cursor:pointer">删除</span>

                        </div>
                        
                    </li>`;


            }).join(''));
    
                var ze = 0;
                var num =0;
                $('.sq').each(function(idx,item){
                    console.log($(item).find('.carnum').val())
                        ze += (parseInt($(item).find('.je').html())*($(item).find('.carnum').val()))
                        // console.log
                        num  +=($(item).find('.carnum').val()-0);

                })
                
              
                $('.zjs').html(ze);
               $('.spze').html(num);

               // 删除节点
               $('.car_del').click(function(){

                    $(this).parents('li').remove();
                   

                    var currentGUID = $(this).parents('li').attr('data-guid');
                    for(var i=0;i<goodslist.length;i++){
                        if(goodslist[i].guid === currentGUID){
                            goodslist.splice(i,1);
                            break;
                        }
                    }

                    // 删除后重写cookie
                     setCookie('carlist',JSON.stringify(goodslist),5,'/');
                    // 重新计算被删除的商品数
                    num  -=  $(this).parents('.sq').find('.carnum').val();
                
                        console.log(ze)
                        // console.log(parseInt($(this).parents('li').find('.je').html()))
                        ze = ze - parseInt($(this).parents('li').find('.je').html() * $(this).parents('li').find('.carnum').val())
                        console.log(ze)
                        $('.zjs').html(ze);
                        $('.spze').html(num);

               })

                // 全部清空

                $('.allclear').click(function(){

                        $('.carl').remove();
                          $('.zjs').html(0);
                        $('.spze').html(0);
                        removeCookie('carlist')


                })




        })

            $('footer').load('../src/html/footer.html', function() {



            })



        }
    }
})
