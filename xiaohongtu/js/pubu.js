jQuery.fn.extend({
	puBu:function(elem,e){
//		var myarr=[2,8,1,9,5];
//		var a=Math.min.apply(null,myarr);
//		alert(a)
		$(window).load(function(){
			waterfall();
		});
		function waterfall(){
			var oBox=$(elem);//获取container下方第一级的div
			var w=oBox.eq(0).outerWidth();//获取类叫box的第一个div的宽度
			var vW=$(window).width();//获取浏览器可视区域的宽度
			var cols=Math.floor(vW/w);//获取列数
//			console.log(cols)
			$(e).css({"width":w*cols+"px","margin":"0 auto"});
			var hArr=[];
			oBox.each(function(index,ele){
				var h=$(this).outerHeight();
				if(index<cols){   //如果是第一行  把所有第一行的高放到一个数组
					hArr[index]=h;
				}else{   //超过第二行 开始定位
					var minH=Math.min.apply(null,hArr);//得出数组中最小的那个图片的高度
//					console.log(minH)
					var minIndex=getMin(minH);//高度最小的下标
					$(ele).css({"position":"absolute","left":minIndex*w+"px",top:minH+"px"});
					hArr[minIndex]+=oBox.eq(index).outerHeight();
				}
			});
			//获取高度的数组中高度最小的那个的元素下标
			function getMin(m){
				for(var i=0;i<hArr.length;i++){
					if(hArr[i]==m){
						return i;
					}
				}
			}
		}
	
	
	}s
});
