
$(function () {

    // 轮播图
    $(".carousel-content").carousel({
        carousel: ".carousel",//轮播图容器
        indexContainer: ".img-index",//下标容器
        prev: ".carousel-prev",//左按钮
        next: ".carousel-next",//右按钮
        timing: 3000,//自动播放间隔
        animateTime: 700,//动画时间
        autoPlay: true,//是否自动播放 true/false
        direction: "left",//滚动方向 right/left
    });
    $(".carousel-content").hover(function () {
        $(".carousel-prev,.carousel-next").fadeIn(300);
    }, function () {
        $(".carousel-prev,.carousel-next").fadeOut(300);
    });
    $(".carousel-prev").hover(function () {
        $(this).find("img").attr("src", "./images/left2.png");
    }, function () {
        $(this).find("img").attr("src", "./images/left1.png");
    });
    $(".carousel-next").hover(function () {
        $(this).find("img").attr("src", "./images/right2.png");
    }, function () {
        $(this).find("img").attr("src", "./images/right1.png");
    });



// 菜单栏
$('.caid li').on('mouseover', function(){
    //去除所有的样式
    $(this).siblings().removeClass('tus');
    //给自己添加样式
    $(this).addClass('tus');
    
    //让所有的盒子隐藏
    $('li dl').hide();
    //让当前按钮对应的盒子显示
    let index=$(this).index()
  
    $('li dl').eq(index).show()
});
$('.caid li').on('mouseout', function(){
    $(this).removeClass('tus')
    $('li dl').hide();

})



$('.foolr a').click(function () {
    //获取点击当前li的索引
    let index = $(this).index()
    //获取对应楼层盒子p距离浏览器窗口顶部的偏移
    let fTop = $('.floor1').eq(index).offset().top
    //设置滚动条滚动的距离
    $('html,body').animate({ scrollTop: fTop }, 500)

})

// 返回顶部
$('.boss img').on('click',function(){
    $('html,body').animate({ scrollTop: '0' }, 500)
    return false;
})


// 分享

$('.draw .lin').on('mouseover',function(){
    $(this).next().stop(true,true).show(600)
})
$('.draw .lin').on('mouseout',function(){
    $(this).next().hide(600)
})


// 切换
$('.to p').on('mouseover',function(){
    $(this).addClass('tup').siblings().removeClass('tup')

})
$('.fuzhuang p').on('mouseover',function(){
    $(this).addClass('nei').siblings().removeClass('nei')
})


// 菜单栏
$('.dexter dt').on('click',function(){
    $(this).hide().siblings().show()
    $('.dexter dd').hide()
    $(this).next().show(500)
})


// 顶部效果
$(window).scroll(function(){
    // 获取滚动条数值
    let scroll = $("html,body").scrollTop();
    // 判断数值达到500以上显示副标题否则隐藏副标题
    if(scroll>500){
        $(".db").stop(true).fadeIn(100);
    }else{
        $(".db").hide()
    } 
})
// product页面的手风琴效果
$('.rex li').on('mouseover',function(){
    $(this).siblings().removeClass('cong')
    $(this).addClass('cong')
})



//product页面独家新闻切换
$('#exclusive P').on('mouseover',function(){
    $(this).siblings().removeClass('huo')
    $(this).addClass('huo')
    var index=$(this).index()
    $('.xn>div').siblings().hide()
    $('.xn>div').eq(index).show()
})



});



// window.onload = function () {
//       //获取元素
//    let box=document.querySelectorAll('.xn>div')//书籍盒子
//    let too=document.querySelectorAll('.to p')//标题
//    //定义标签
//     var num=1
//     setInterval(function(){
//         num++
//         if(num===box.length){
//             num=1
//         }
//         for(let j=0;j<box.length;j++){
//             box[j].className='zhekou clearfix'
//             too[j].className=''
//         }
//           too[num].className='cll'
//           box[mun].className='hou'

//     },1000)









