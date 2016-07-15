// 如何使用define将一个个功能定义成模块
define(['jquery'],function($) {
	// body...
/*	function isEmpty(){}
	// 验证用户名位数
	function checkLength(){}
	// 检测是否为相等
	function isEqual(){

	}*/
	return{
		isEmpty:function(w){
			return w;
		},
        checkLength:function(){},
        isEqual:function(st1,st2){
        	return st1===st2;
        }

	}
});