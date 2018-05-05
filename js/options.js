/**
 * 设置页js
 */
window.onload = function() {
	//常量
	
	//加载页面数据
	if (localStorage.linkstr!=undefined&&localStorage.linkstr.length!=0) {
		var sshtml = document.getElementById('allsshtml').innerHTML;
		var links = ObjArr(localStorage.linkstr);//对象数组
		for (var i = 0; i <= links.length - 1; i++) {
			var sobj = JSON.parse(links[i]);
			sshtml += "<li>"+ sobj.n +"<span class=\"delete\" id=\"delss"+i+"\">&nbsp;x&nbsp;<\/span><\/li>";
		};
		document.getElementById('allsshtml').innerHTML=sshtml;
	};
	if (localStorage.kwstr!=undefined) {
		var kwhtml = document.getElementById('kwhtml').innerHTML;
		var kwstr = localStorage.kwstr.split(',');//数组
		for (var i = 0; i <= kwstr.length - 1; i++) {
			kwhtml += "<li>"+ kwstr[i] +"<span class=\"delete\" id=\"delkw"+i+"\">&nbsp;x&nbsp;<\/span><\/li>";
		};
		document.getElementById('kwhtml').innerHTML=kwhtml;
	};



	var kws = localStorage.kws;

	//alert(linksObj.n);

	//添加搜索
	document.getElementById('sbtn').onclick = function() {
		var ssn = document.getElementById('ssn').value;
		var ssl = document.getElementById('ssl').value;
		if (ssn.length==0||ssl.length==0) {
			alert('名称和连接不能为空');
		} else{
			addss = new Object();
			addss.n = ssn;
			addss.l = ssl;
			var addstr = JSON.stringify(addss);
			var linkstr = localStorage.linkstr;
			if (linkstr==undefined) {
				linkstr = addstr;
			} else{

				linkstr += ';';
				linkstr += addstr;
			};
			localStorage.linkstr = linkstr;
		};
		
		location=location;
	};
	//添加关键词
	document.getElementById('kwbtn').onclick = function() {
		var kwn = document.getElementById('kwn').value;
		if (kwn.length==0) {
			alert('名称和连接不能为空');
		} else{
			var kwstr = localStorage.kwstr;
			if (kwstr==undefined) {
				kwstr = kwn;
			} else{
				kwstr += ',';
				kwstr += kwn;
			};
			localStorage.kwstr = kwstr;
		};
		
		location=location;
	};
	//删除搜索
	document.getElementById('allsshtml').onclick = function() {
		var k = parseInt(event.target.id.replace(/delss/, ""));
		if (!isNaN(k)) {
			var links = ObjArr(localStorage.linkstr);
			links.splice(k,1);
			if (links.length>0) {
				linkStr = links.join(';');
				localStorage.linkstr = linkStr;
			} else{
				localStorage.removeItem('linkstr');
			};
			
			location=location;
		};
	};

	//删除关键词
	document.getElementById('kwhtml').onclick = function() {
		var k = parseInt(event.target.id.replace(/delkw/, ""));
		if (!isNaN(k)) {
			var kwArr = localStorage.kwstr.split(',');
			kwArr.splice(k,1);
			if (kwArr.length>0) {
				kwStr = kwArr.join(',');
				localStorage.kwstr = kwStr;
			} else{
				localStorage.removeItem('kwstr');
			};
			
			location=location;
		};
	};

	//清除所有数据
	document.getElementById('delall').onclick = function() {
		localStorage.clear();
		location=location;
	};
	//清除搜索数据
	document.getElementById('delallss').onclick = function() {
		localStorage.removeItem('linkstr');
		location=location;
	};
	//清除关键词数据
	document.getElementById('delallkw').onclick = function() {
		localStorage.removeItem('kwstr');
		location=location;
	};
};

