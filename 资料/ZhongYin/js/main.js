$(document).ready(function() {
	var h = $(window).height();
	var w = $(window).width();
	//显示折叠导航时不显示英文导航
	if(w < 1200) {
		$(".nav_en").css({
			"display": "none"
		})
	};
	
//	$('.bg_tit').animate({
//		 opacity:'1',
//		 background-size:'100% 100%'
//	},1000)
	
	
	//进入当前页面显示第一页内容
	var locationhref = (String(window.location)).split("?"); 
	var ifpractices = $(".menu").children(".navbar-nav").children(".menu_li").eq(2).children("a");
	if(locationhref[0] == ifpractices[0].href){
		$(".nav-tabs li a").hover(function(){
			var i = $(this).parent().index();
			$(".nav-tabs li").removeClass("active");
			$(this).parents().addClass("active");
			$(".tab-content").children(".tab-pane").eq(i).show().siblings().hide();
		});
	}else{
		$(".nav-tabs li a").hover(function(){
			var i = $(this).parent().index();
			$(".nav-tabs li").removeClass("active");
			$(this).parent().addClass("active");
			$(".tab-content").children(".tab-pane").eq(i).fadeIn(200);
			$(".tab-content").children(".tab-pane").eq(i).siblings().hide();
			//新闻中心、中银文库
			$('.vertical_tabs').find(".tab-content").children(".tab-pane").eq(i).siblings().hide();
			$('.vertical_tabs').find(".tab-content").children(".tab-pane").eq(i).fadeIn(200,function(){
					new WOW().init();
			});
		});
	};

	//二级导航菜单及链接	
	var id = getUrlParam("id");
	if(id == "" || id == null){						 //如果没有传固定的值
		$(".hidden-xs li").eq(0).addClass("active"); //默认选择
		$(".hidden-xs li").eq(0).siblings().removeClass("active");	
		$(".tab-content").children(".tab-pane").eq(0).addClass("active");
		//关于中银--全球机构
		$(".tab_3").children('.container').find("nav-tabs li").eq(0).addClass('active');
	}else{
		$(".hidden-xs li").eq(id - 1).siblings().removeClass("active");
		$(".hidden-xs li").eq(id - 1).addClass("active");
		$(".tab-content").children(".tab-pane").removeClass("active");	
		$(".tab-content").children(".tab-pane").eq(id -1).addClass("active");
		$(".tab_3").children('.container').find("li").eq(id - 1).addClass('active').siblings().removeClass('active')
	}
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;  												//匹配正则 返回id
	}
	
	//给当前页面导航链接加active样式
	$(".menu ul li a").each(function() {
		var locationhref = (String(window.location)).split("?"); 	//当前页面的url地址  如果有传值 截取？前面的
			if($(this)[0].href == locationhref[0]) {				//判断如果当前遍历到的 a 的 href 属性 和 当前页面的url一样 给当前元素添加 样式
				$(this).addClass("active");				
			}
	});
	
	//输入框 的点击事件
	function stopPropagation(e) {
		if (e.stopPropagation) {
				e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	};
	
	$(document).on('click',function(){ 
		$(".select-group .select-default").css({'border':'1px solid #951F23'}); 
	}); 
	//自定义下拉菜单
	$(".select-group .select-default").on("click", function(e) {
		stopPropagation(e);
		if($(this).next(".select-options").css("display") == "none") {//如果 他的下一个兄弟级元素select-options是隐藏的 
			$(".select-options").css({								
				"display": "none" 									//让页面所有select-options继续隐藏
			});
			$(this).next(".select-options").slideDown(200)				//当前元素下的下一个兄弟级元素 select-options 显示
			
			$(".select-group .select-default").css('border','1px solid #951F23');	
			
			$(this).css({'border':'1px solid #951F23'}); 			//当前点击的元素显示边框
		} else {
			$(".select-options").css({
				"display": "none",									//所有的select-options元素隐藏
			});
			$(this).css({'border':'1px solid #951F23'});				//当前点击的元素边框
		}
	});
	$(".select-options li").on("click", function() {
		$(this).parent().prev(".select-default").css('border','1px solid #951F23')  //select-options  .select-default  边框
		$(this).parents(".select-options").prev(".select-default").addClass("active").children(".select-txt").html($(this).html());
		$(this).parents(".select-options").css({								//隐藏
			"display": "none"
		})
	});
	
	//点击空白处，关闭下拉菜单
	$(document).on("click touchend", function(event) {
		var _con = $('.select-group');
		if(!_con.is(event.target) && _con.has(event.target).length === 0) {
			$('.select-group').children(".select-options").css({
				"display": "none"
			});
		}
	});
	//限制字数显示
	function mediaQueryLimitTxt(width) {
		if(width < 767) {
			limitTxt(".limited_txt_s", 40);
			limitTxt(".limited_txt_l", 300);
			limitTxt(".limited_txt_l_xks", 35);
			limitTxt(".limited_txt_l1_xks", 40);
			limitTxt(".limited_txt_s1", 60);
		} else if(width > 767 && width < 1199) {
			limitTxt(".limited_txt_s", 60);
			limitTxt(".limited_txt_l", 100);
			limitTxt(".limited_txt_l_xks", 61);
			limitTxt(".limited_txt_l1_xks", 58);
			limitTxt(".limited_txt_2_xks", 18);
			limitTxt(".limited_txt_s1", 80);
		} else {
			limitTxt(".limited_txt_s", 80);
			limitTxt(".limited_txt_l", 200);
			limitTxt(".limited_txt_l_xks", 150);
			limitTxt(".limited_txt_l1_xks", 100);
			limitTxt(".limited_txt_2_xks", 20);
			limitTxt(".limited_txt_s1", 210);
		}
	}
	function limitTxt(obj, num) {
		var count = $(obj).length;
		for(var i = 0; i < count; i++) {
			var txt = $(obj).eq(i).html();
			if(txt.length >= num) {
				$(obj).eq(i).html(txt.substr(0, num) + "...");//每个obj对象的内容输入为截取到的num个
			}
		}
	}
	mediaQueryLimitTxt(w);
	
	//头部搜索
	$(".mob_search,.icon_account.search").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$(".sub_search").removeClass("active")
		} else {
			$(this).addClass("active")
			$(".sub_search").addClass("active")
		}
	});
	
	//移动端菜单
	$(".mob_menu").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$(".menu").removeClass("active")
			$(".mob_search,.mob_lang").css({
				"visibility": "visible"
			})
			if(w < 767) {
				$("html,body").css({
					"overflow": "auto"
				})
			}
		} else {
			$(this).addClass("active")
			$(".menu").addClass("active")
			$(".mob_search,.mob_lang").css({
				"visibility": "hidden"
			})
			if(w < 767) {
				$("html,body").css({
					"overflow": "hidden"
				})
			}
		}
		$(".mob_search,.icon_account.search").removeClass("active")
		$(".sub_search").removeClass("active")
	});
	
	
	//header导航菜单
	if(w > 1200) {
		$(".menu .menu_li").hover(function(e) {
			var thisindex = $(this).index();
			
			$(this).children(".submenu").stop(true, true).slideDown(300)
			$(this).addClass('active');
		}, function(e) {
			$(this).children(".submenu").stop(true, true).slideUp(100)
			$(this).removeClass('active');
		});
		//下拉 submenu1显示
		$(".menu").children(".navbar-nav").children(".menu_li").eq(2).hover(function(){
					$(".submenu1").stop(true, true).slideDown(300);
		},function(){
					$(".submenu1").stop(true, true).slideUp(100);
		})
	} else if(w <= 767) {
		
        $('.menu_li').eq(5).children('a').attr('href','#');
        $('.menu_li').eq(6).children('a').attr('href','#');
       	$(".menu ul").children('li').eq(5).on('click',function () {
			$(this).find('.submenu').toggle(300);
        });
       	$(".menu ul").children('li').eq(6).on('click',function () {
			$(this).find('.submenu').toggle(300);
        })
    }else {
        $('.menu_li').eq(5).children('a').attr('href','news.html');
        $('.menu_li').eq(6).children('a').attr('href','library.html');
        
	};
		//动态获取nav宽度
	var navwidth = $('.navbar-nav').innerWidth();
	var navheight = $('.navbar-nav').innerHeight();
	$(".submenu1").css('width',navwidth)
	//导航栏搜索框
	$(".search_show_con a").hover(function(){
		$(".search_show_con").css({'border-bottom':'1px solid #951f23'});
		$(".search_show_con").children("input").show(500).focus();
		var lstr = $(".search_show_con").children("input").val();
		localStorage.setItem('search_str',lstr);
		
	},function(){
		$(".search_show_con").children("input").blur(function(){
			$(".search_show_con").css({'border':'1px solid #fff'});
			$(this).hide(500);
		})
	});
	
	//返回顶部
	var $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body")).click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 200);
		}),
		$backToTopFun = function() {
			var st = $(document).scrollTop(),
				winh = $(window).height();
			(st > 400) ? $backToTopEle.show() : $backToTopEle.hide();//成立运行前面不成立运行后面
		};
	$(window).bind("scroll", $backToTopFun);
	$(function() {
		$backToTopFun();
	});
	//返回顶部end
})