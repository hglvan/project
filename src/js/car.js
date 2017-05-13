define(['jquery','cookie'], function($,cookie) {


    return {

        init: function() {

            // 加载公共头部
            $('header').load('../src/html/top.html', function() {

                // 移出头部多余节点
                $(".top_f,.search,.cart,.rightcar").remove();
                var $img = $("<div class='bdimg' style='float:right'><img src='img/car/1.png'></div>")
                $(".top_c").append($img)




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
                            <i style="color:#ccc;float:left">-</i><input type="text" class="carnum" value="1" style="width:20px;text-align:center;height:28px;float:left;border:none" ><i style="color:#ccc;float:left">+</i >
                            </span>
                            <span>56</span><span>674</span><span class="car_del" style="cursor:pointer">删除</span>

                        </div>
                        
                    </li>`;


            }).join(''));
    
                var ze = 0;
                var num;
                $('.sq').each(function(idx,item){

                        ze += parseInt($(item).find('.je').html())
                        // console.log
                        num = idx;

                })
                
              
                $('.zjs').html(ze);
               $('.spze').html($('.sq').length);

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
                    $('.sq').each(function(idx,item){

                      
                        num = idx;
                    })
                        console.log(ze)
                        console.log(parseInt($(this).parents('li').find('.je').html()))
                        ze = ze - parseInt($(this).parents('li').find('.je').html())

                      $('.zjs').html(ze);
                    $('.spze').html($('.sq').length);

               })




        })

            $('footer').load('../src/html/footer.html', function() {



            })



        }
    }
})
