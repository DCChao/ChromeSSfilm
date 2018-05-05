/**
 * 通用js
 */
//获取数据转化为对象字符串数组
function ObjArr (str) {
	var oarr;
	str!=undefined?oarr=str.split(';'):oarr=undefined;
	return oarr;
}