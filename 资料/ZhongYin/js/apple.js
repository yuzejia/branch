// JavaScript Document
;(function(){
	autoplay=true;
var mySwiper = new Swiper('#banner-swiper.swiper-container', {
	autoplay: 3000,			//轮播动画时间
	progress: true,			//设定progress参数为true时启用 Smooth Progress 插件
	speed: 1000,			//滑动速度
	paginationClickable: true,		//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
	loop: true,				//环路
	onProgressChange: function(swiper) {	// //启用 Smooth Progress 插件后会增加一个回调函数onProgressChange
		
		for (var i = 0; i < swiper.slides.length; i++) {	//插件会在每个slide上面增加一个progress属性，同时在swiper也增加一个property属性
			
			var slide = swiper.slides[i];					//得到每一个slides
			
			var progress = slide.progress;					//得到每一个slide的下标   活动的为0 其他的依次-1
			var translate;
			if (progress > 0) {
				translate = progress * 0.9 * swiper.width; 
				scale = 1 - progress * 0.1
				if (progress > 1) {
					scale = 0.9
				}
				txtPositionX = 0
				txtPositionY = progress * 30 + 'px'

			} else {
				translate = 0;
				scale = 1
				txtPositionX = -progress * 1000 + 'px'
				txtPositionY = 0
			}
			var txts = slide.querySelectorAll('.txt');
			
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransform(txts[j], 'translate3d(' + txtPositionX + ',' + txtPositionY + ',0)');
			}
			swiper.setTransform(slide, 'translate3d(' + (translate) + 'px,0,0) scale(' + scale + ')');//设置 想要的效果
		}
	},//设置每屏上面文字效果
	onTouchStart: function(swiper) {						//当碰触到slider时执行 回调函数
//		for (var i = 0; i < swiper.slides.length; i++) {	//便利到每一瓶的slide 
//			swiper.setTransition(swiper.slides[i], 0);		//设置便利到的slide的变形速度
//			var txts = swiper.slides[i].querySelectorAll('.txt');	//获取到每一个slide里面类名为txt的标签
//			console.log(txts)
//			for (var j = 0; j < txts.length; j++) {			//便利
//				swiper.setTransition(txts[j], 0);			//设置便利到的每一个标签的变形速度  == transtion
//			}
//		}
	},
	onSetWrapperTransition: function(swiper, speed) {		//回调函数，每当设置Swiper开始过渡动画时执行。transtion获取到的是Swiper的speed值。 speed滑动效果时间
		
//		console.log(swiper.slides.length)
		
		for (var i = 0; i < swiper.slides.length; i++) {
			
			swiper.setTransition(swiper.slides[i], speed);
			
//			var txts = swiper.slides[i].querySelectorAll('.txt');
//			for (var j = 0; j < txts.length; j++) {
//				swiper.setTransition(txts[j], speed);
//			}
		}
	},//小切换图标的动画
	onSlideChangeStart: function(swiper) {				//回调函数，swiper从当前slide开始过渡到另一个slide时执行
		if (autoplay) {									//当为 true时
			if (swiper.activeLoopIndex == 0) {			//如果 在loop模式下返回当前活动块的索引 如果当前显示的是第一屏
				
				$('.pagination li').removeClass('current');		//添加current	-->添加动画  透明度
				$('.pagination li').eq(0).removeClass('replace');	//删除第一个 的replace -->背景色
			}
			if (swiper.activeLoopIndex == 1) {			//在loop模式下返回当前活动块的索引。 如果滚动到第二瓶 给第一个 li 删除 current firstCurrent 添加 replace
				$('.pagination li').eq(0).removeClass('firstCurrent current').addClass('replace')
			}
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current').siblings().removeClass('current replace');	//当前slide下标一样的li 添加current 并删除其他同级别元素的current replace
		} else {
			
			$('.pagination li').removeClass('current firstCurrent click');		//
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current');
		}

	},
	onFirstInit: function(swiper) {						//回调函数，初始化后执行。
		$('.pagination li').eq(0).addClass('firstCurrent');
	},

	onAutoplayStop: function() {						//回调函数，自动切换结束时执行
		autoplay=false;
		$('.autoplay').removeClass('autoplay');
	},
})

// Set Z-Indexes---设置 层级
for (var i = 0; i < mySwiper.slides.length; i++) {
	        mySwiper.slides[i].style.zIndex = i;
}
//切换按钮 绑定  
$('#banner-swiper').find('.swiper-button-prev').on('click', function(e) {
//	e.preventDefault()			//阻止默认事件
	mySwiper.swipePrev()		//执行swiper的向左一个滚动
})
$('#banner-swiper').find('.swiper-button-next').on('click', function(e) {
//	e.preventDefault()
	mySwiper.swipeNext()		//执行swiper的向左一个滚动
})

//点击小按钮 切换到指定页面
$(".pagination li").on('touchstart mousedown', function(e) {	//touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。-->当按下鼠标按钮时，隐藏或显示元素：
//	e.preventDefault()
	if (autoplay) {							//如果为true  ==false 
		autoplay=false;
		mySwiper.stopAutoplay();			//停止自动切换
		$(this).addClass('click'); 			
	}

	mySwiper.swipeTo($(this).index())		//  Swiper切换到指定slide。
											//	index:必选，num，指定将要切换到的slide的索引。
											//	speed:可选，num(单位ms)，切换速度
											//	runCallbacks:可选，boolean，设置为false时不会触发onSlideChange回调函数。
})
window.onresize = function() {
	mySwiper.reInit();						//重新初始化Swiper。
}
})($)
