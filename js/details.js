$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 370,//承载容器宽
		height : 370,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
   
	// details页面商品介绍那里的切换效果
	$('.shan p').on('click',function(){
		$(this).siblings().removeClass('pin')
		$(this).addClass('pin')
		let index=$(this).index()
		$('.xx>div').hide()		
		$('.xx>div').eq(index).show()
	})


	$('.shop div').on('click',function(){
		$(this).siblings().removeClass('noe')
		$(this).addClass('noe')
	})


	var i=1
	$('#shul .jia').on('click',function(){
		i=i+1
     $(this).siblings('span').html(i)	
	})
	$('#shul .jian').on('click',function(){
		i=i-1
     $(this).siblings('span').html(i)	
	})





	
	
});