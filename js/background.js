/**
 * 扩展后台脚本
 */


//定义右键菜单

chrome.contextMenus.create({
    'type':'normal',
    'title':'用自定义搜索',
    'contexts':['selection'],
    'id':'myss',
    'onclick':mss
});
function mss(info, tab){
    var sKey = localStorage.ssArr;
    var linkArr = localStorage.linkstr.split(';');
    var sObj = JSON.parse(linkArr[sKey]);
    var sUrl = sObj["l"];
    
    var kwArr = localStorage.kwArr.split(',');
    var kwAllArr = localStorage.kwstr.split(',');
    var kws = '';
    var url = sUrl+info.selectionText;
    if (localStorage.kwArr.length>0) {
        for (var i = 0; i <= kwArr.length - 1; i++) {
            var k = kwArr[i];
            kws += '+';
            kws += kwAllArr[k];
        };
        url += kws ;
    };
    

    window.open(url, '_blank');
}

//功能暂不完善
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//     chrome.contextMenus.update('myss',{
//         'title':'用 自搜索 查找“'+message+'”'
//     });
// });

