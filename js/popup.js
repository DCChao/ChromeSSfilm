/**
 * 展示页js
 */
//加载数据
if (localStorage.linkstr!=undefined) {
	var sshtml = document.getElementById('ss').innerHTML;
	var links = ObjArr(localStorage.linkstr);//对象数组
	for (var i = 0; i <= links.length - 1; i++) {
		var sobj = JSON.parse(links[i]);
		sshtml += "<label><input type='radio' name='dss' value='"+i+"' />"+"&nbsp;"+sobj.n+"</label>";
	};
	document.getElementById('ss').innerHTML=sshtml;
};
if (localStorage.kwstr!=undefined) {
	var kwhtml = document.getElementById('kws').innerHTML;
	var kwstr = localStorage.kwstr.split(',');//数组
	for (var i = 0; i <= kwstr.length - 1; i++) {
		kwhtml += "<label><input name='kwp' type='checkbox' value='"+i+"' />"+"&nbsp;"+kwstr[i]+"</label>"
	};
	document.getElementById('kws').innerHTML=kwhtml;
};

//判断设置
var ssObj = document.getElementsByName('dss');
var kwObj = document.getElementsByName('kwp');
if (localStorage.linkstr!=undefined) {
	for (var i = 0; i <= ssObj.length - 1; i++) {
		if (ssObj[i].value==localStorage.ssArr) {
			ssObj[i].checked = true;
			break;
		};
	};
};
if (localStorage.kwstr!=undefined) {
	var kwArr = localStorage.kwArr.split(',');
	for (var i = 0; i <= kwArr.length - 1; i++) {
		for (var c = 0; c <= kwObj.length - 1; c++) {
			if (kwObj[c].value==kwArr[i]) {
				kwObj[c].checked = true;
			};
		};
	};
};			
	

//自动保存
window.onmouseup = function(){
	function saveArr() {
		var ssArr = new Array();
		var kwArr = new Array();
		for (var i = 0; i <= ssObj.length - 1; i++) {
			if (ssObj[i].checked) {
				ssArr.push(ssObj[i].value);
				break;
			};
		};
		for (var i = 0; i <= kwObj.length - 1; i++) {
			if (kwObj[i].checked) {
				kwArr.push(kwObj[i].value);
			};
		};
	
		localStorage.ssArr = ssArr;
    	localStorage.kwArr = kwArr;
	};
    setTimeout(saveArr, 100);
    
}

//网址二维码
window.onload = function() {
	document.getElementById('ewm').onclick = function() {
		if (document.getElementById('code').innerHTML.length==0) {
			require.config({
		        baseUrl: 'js'
		    });
		    require(['jquery','qrcode'],function () {
		        chrome.tabs.getSelected(function(tab) {
		        	var urlStr = tab.url;
				    $("#code").qrcode({
			            //render: "table", //table方式
			            width: 150, //宽度
			            height:150, //高度
			            text: urlStr //任意内容
			        });
				});
		    });
		};
		
	}
	
}