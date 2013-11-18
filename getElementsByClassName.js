var getElementsByClassName = function(c){
	//var timestamp0 = new Date().getTime();
	var eles = new Array();
	var tags = document.getElementsByTagName("*");
	for(var i=0;i<tags.length;i++){
		var temp = tags[i].className.split(" ");
		for(j in temp)
 			if(temp[j]===c)eles[eles.length]=tags[i];      //eles.push(tags[i]);
	}
	//var timestamp1=new Date().getTime();
	//console.log(timestamp1-timestamp0+"ms");
	return eles;
}


var getElementsByClassName2 = function(c){
	//var timestamp0 = new Date().getTime();
	var tags = document.getElementsByTagName("*");
	var result = new Array();
	var pattern = new RegExp("\\b"+c+"\\b","i");    		//pattern = new RegExp("\\b"+c+"(?!\\w)","i");
		for(var i=0; i<tags.length; i++)
			if(pattern.test(tags[i].className))result.push(tags[i]);
	//var timestamp1 = new Date().getTime();
	//console.log(timestamp1-timestamp0+"ms");
		return result;
	}

//测试结果:后一个函数不论使用哪个正则执行效率是前一个3倍以上; 