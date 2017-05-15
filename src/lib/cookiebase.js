// //获取特停的cookie
// define(function(){
// 	return {
// 		getCookie : function(name){
// 			var str = document.cookie;
// 			var arr = str.split("; ");
// 			for(var i=0;i<arr.length;i++){
// 				var newArr = arr[i].split("=");
// 				if(newArr[0]==name){
// 					//return  newArr[1]
					
// 					return decodeURIComponent(newArr[1])
// 				}
// 			}
// 		},
// 		setCookie : function(name,value,expires,path){
// 			var str = "";
// 			if(name!=undefined &&value!=undefined){
// 				//str+=name+"="+value;
				
// 				str += name+"=" + encodeURIComponent( value );
// 		//					document.cookie = str;
// 				if(expires){
// 					//expires  需要保存的时间  7 表示保存7天
					 
// 					 var d = new Date();
// 					 d.setDate(d.getDate()+expires)
// 					//拼接过期时间
// 					str+=";expires=" +d
// 				}
// 				if(path){

// 					//拼接访问路径
// 					str+=";path=" +path
// 				}
// 				document.cookie = str;
// 			}else{
// 				alert('参数有问题')
// 			}
// 		},
// 		removeCookie : function(name){
			
// 			// setCookie(name,null,now);
// 			this.setCookie(name,'',-7,'/');
// 			console.log(document.cookie)
// 		}
// 	}
// })


function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(newArr[0]==name){
			//return  newArr[1]
			
			return decodeURIComponent(newArr[1]);
		}
	}
//	alert("此cookie不存在");
}

function setCookie(name,value,expires,path){
	console.log(1)
	var str = "";
	if(name!=undefined &&value!=undefined){
		//str+=name+"="+value;
		
		str += name+"=" + encodeURIComponent( value ) ;
//					document.cookie = str;
		if(expires){
			//expires  需要保存的时间  7 表示保存7天
			 
			 var d = new Date();
			 d.setDate(d.getDate()+expires)
			//拼接过期时间
			str+=";expires=" +d
		}
		if(path){

			//拼接访问路径
			str+=";path=" +path
		}
		document.cookie = str;
	}else{
		alert('参数有问题')
	}
}


function removeCookie(name){
	setCookie(name,'',-10,'/');
}