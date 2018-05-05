/**
 * 网页注入脚本
 */
//获取当前页面高亮文本
window.onmouseup = function(){
	if (event.button==2) {
		var selection = window.getSelection();
	    if(selection.anchorOffset != selection.extentOffset){
	        chrome.runtime.sendMessage(selection.toString());
	    }
	};
}