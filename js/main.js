requirejs.config({
// 配置定义别名

	paths:{
		jquery:'jquery.min'
	}
});
// 引入jquery模块
requirejs(['jquery','validate'],function($,validate){
	// $('body').css('background-color','red');
     
    /*  // 验证用户名是否为空
	function isEmpty(){}
	// 验证用户名位数
	function checkLength(){}
	// 检测是否为相等
	function isEqual(){

	}
	// 返回所有方法
	return{
		isEmpty:function(){},
        checkLength:function(){},
        isEqual:function(){}

	}*/
	console.log(validate.isEmpty('rrr'));
	console.log(validate.isEqual(1,2));
});
