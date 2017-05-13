define(['jquery','cookie'], function($,cookie) {


    return {

        init: function() {

            // 加载公共头部
            $('header').load('../src/html/top.html', function() {

                // 移出头部多余节点
                $(".top_f,.search,.cart,.rightcar").remove();
                var $img = $("<div class='bdimg'><img src='img/register/tipinfo1.jpg'></div>")
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



            $('main').load('../src/html/login_main.html', function() {

                // 给input添加阴影效果
                $('input').on('focus', function() {

                    $(this).addClass("input_active");
                    $('#reg_btn').removeClass("input_active");
                })
                $('input').on('blur', function() {

                    $(this).removeClass("input_active");
                })

                // 设置切换验证码
                var $idx = 0;
                $("#code_btn").click(function() {
                    $(".yzm").attr("src", "img/register/" + (++$idx) + ".png")
                    if ($idx >= 3) {
                        $idx = 0;
                    }

                })

                var bal, bal1, bal2, bal3;

                // 检查验证码是否正确
                $('.code').blur(function() {
                    var value = this.value.toLowerCase();
                    if (value == '35ta' || value == "5kkz" || value == "xclu") {
                        bal = true;
                        return false;
                    } else {
                        $('.code_error').html("验证码输入错误").css({
                            "color": "red",
                            "font-size": "13px"
                        });
                    }

                })
                $('.code').focus(function() {
                    $('.code_error').html("");
                })

               


            $('#reg_btn').click(function() {
                    bal1 = $('#uname').val();
                    bal2 = $('#psw').val();

                if (bal && bal1 && bal2) {
                	
                            $.post('../src/php/login.php', {
                                uname: $('#uname').val(),
                                password: $('#psw').val()
                         
                            }, function(response) {
                                var $obj = eval('(' + response + ')');
                                if ($obj.state) {
                                      var user = {
                                        "username": bal1
                                        };
                                            
                                // cookie.setCookie('login', JSON.stringify(user), 7, '/');
                                setCookie('login', JSON.stringify(user), 7, '/');
                                location.href = "../src/index.html?username="+bal1;
                                } else {
                                    alert("登录失败,请重新检查信息");
                                }
                            })
                } else {
                    alert("请检查信息是否正确输入完整")
                }

            })


        })

            $('footer').load('../src/html/footer.html', function() {



            })



        }
    }
})
