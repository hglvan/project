define(['jquery'], function($) {


    return {

        init: function() {

            // 加载公共头部
            $('header').load('../src/html/top.html', function() {

                // 移出头部多余节点
                $(".top_f,.search,.cart").remove();
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



            $('main').load('../src/html/register_main.html', function() {

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

                //检查手机号码
                var regiphone = /^((13[0-9])|(15[0-9])|(18[0-9]))\d{8}$/;
                $('#iphone').blur(function() {
                    var value = this.value;
                    if (regiphone.test(value)) {
                        bal1 = true;
                        return false;
                    } else {
                        $('.iphone_error').html("手机格式不正确,请重新输入").css({
                            "color": "red",
                            "font-size": "13px"
                        });
                    }

                })

                $('#iphone').focus(function() {
                    $('.iphone_error').html("");
                })


                //检查密码
                var regpsw = /^\w{6,16}$/;

                $('#psw').blur(function() {
                    var value = this.value;
                    if (regpsw.test(value)) {
                        bal2 = true;
                        return false;
                    } else {

                        $('.psw_error').html("密码格式不正确,请重新输入").css({
                            "color": "red",
                            "font-size": "13px"
                        });
                    }

                })

                $('#psw').focus(function() {
                    $('.psw_error').html("");
                })

                //检查确认密码
                $('#psws').blur(function() {
                    var value = this.value;
                    var $psw = $('#psw').val()
                    if (value == $psw) {
                        bal3 = true;
                        return false;
                    } else {
                        $('.psws_error').html("两次输入的密码不匹配").css({
                            "color": "red",
                            "font-size": "13px"
                        });
                    }

                })

                $('#psws').focus(function() {
                    $('.psws_error').html("");
                })


                $('#reg_btn').click(function() {
                    if (bal && bal1 && bal2 && bal3) {
                    	console.log($('#iphone').val(),$('#psw').val())
                                $.post('../src/php/register.php', {
                                    iphone: $('#iphone').val(),
                                    password: $('#psw').val()
                             
                                }, function(response) {
                                    var $obj = eval('(' + response + ')');
                                    if ($obj.state) {
                                        alert('注册成功！');
                                    } else {
                                        alert("该账户已被注册");
                                    }
                                })
                    } else {
                        alert("请检查信息是否有误")
                    }

                })


            })





            $('footer').load('../src/html/footer.html', function() {



            })



        }
    }
})
