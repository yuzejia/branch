/*
 * You can add common methods to this file for use
 * Custom methods
 * name : 0815
 * 
 * 				 _
 *				| |__ _ _ __ _
 *				| '_ \| | | |/ _` |
 *				| |_) | |_| | (_| |
 *				|_.__/ \__,_|\__, |
 *				             |___/ 
 * 
/*
 *	全局 地址管理
 */
	var https = "http://192.168.1.80/"

//--患者日记--

//字数限制
	function mediaQueryLimitTxt(width) {
			//
			limitTxt(".limited_txt_diary", 83);
			//就诊医生
			limitTxt(".limited_txt_doctor", 52);
	};
	function limitTxt(obj, num) {
		var count = obj;
		var txt = document.querySelectorAll(count);
		for(var j=0;j<txt.length;j++){
			var txts = txt[j].innerHTML;
			if(txts.length >= num) {
				txt[j].innerHTML = txts.substr(0, num) + "...";
			}
		}
	};
	mediaQueryLimitTxt();
	

	//fadein方法
	function fadeIn(el,time){  
	    if(el.style.opacity === ""){  
	        el.style.opacity = 0;  
	    }  
	    if(el.style.display === "" || el.style.display === 'none'){  
	        el.style.display = 'block';  
	    }  
	  
	    var t = setInterval(function(){  
	        if(el.style.opacity < 1){  
	            el.style.opacity = parseFloat(el.style.opacity)+0.01;  
	        }  
	        else{  
	            clearInterval(t);  
	        }  
	    },time/100);  
	};
	function fadeOut(el,time){  
	    if(el.style.opacity === ""){  
	        el.style.opacity = 1;  
	    }  
	    if(el.style.display === "" || el.style.display === 'none'){  
	        el.style.display = 'block';  
	    }  
	  
	    var t = setInterval(function(){  
	        if(el.style.opacity > 0){  
	            el.style.opacity = parseFloat(el.style.opacity)-0.01;  
	        }  
	        else{  
	            clearInterval(t);  
	            el.style.display = 'none'  
	        }  
	    },time/100);  
	};
	