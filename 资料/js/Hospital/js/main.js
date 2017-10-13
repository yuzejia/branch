/*
 * You can add common methods to this file for use
 * Custom methods
 * name : 0815
 */

//--进度条封装--

		//进度条实现
		
		 function setProcess(){
			var Percentage = 
			var processbar = $('.progressbar_con');
			processbar.css({'width': parseInt(processbar.css('width'))+ 1 + "%"})
			
			if(processbar.css('width') == "50%"){
					window.clearInterval(bartimer);
			}
		}
		
		var bartimer = window.setInterval(function(){setProcess();},30);
		bartimer;




//--患者日记--

//字数限制
	function mediaQueryLimitTxt(width) {
			//
			limitTxt(".limited_txt_diary", 83);
			//就诊医生
			limitTxt(".limited_txt_doctor", 52);
	}
	function limitTxt(obj, num) {
		var count = $(obj).length;
		for(var i = 0; i < count; i++) {
			var txt = $(obj).eq(i).html();
			if(txt.length >= num) {
				$(obj).eq(i).html(txt.substr(0, num) + "...");
			}
		}
	}
	mediaQueryLimitTxt();