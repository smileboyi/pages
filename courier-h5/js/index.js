var isAnimating = false,
    mp3 = $('#mp3'),
    expressMain = $('.express-main'),
    cmCenter = $('.cm-center'),
    cmBottom = $('.cm-bottom'),
    noticeBg = $('.notice-bg'),
    index;
(function InitPage(){
     $('#doorbell').attr('autoplay','autoplay');
    var _timer1 =setTimeout(function () {
        $('.give').removeClass('fadeInRightBottom').addClass('bounceInUp');
        $('.arrow').removeClass('none');
        clearTimeout(_timer1);
    },1700)
    //需等到第一页加载完才能滑动到第二页
    var _timer2 =setTimeout(function (){
        isAnimating = true;
        clearTimeout(_timer2);
    },5000)
})()

touch.on('.page-express', 'swipeup', function() {
    if(!isAnimating){
        return false;
    }
    $('.page-express').addClass('pageSwiper');
    $('.page-who').addClass('current pageSwiper');
    var _timer =setTimeout(function (){
        $('.page-express').removeClass('current pageSwiper');
        $('.page-who').removeClass('pageSwiper');
        clearTimeout(_timer);
    },2000)
})
touch.on('.row .cell a', 'tap', function() {
    var link = !!$(this).attr('data-index') ? $(this) : $(this).parent();
    index = link.attr('data-index');
    $('div[data-item|="'+index+'"]').addClass('current pageSwiper');
    expressMain.removeClass('none');
    cmCenter.removeClass('none');
    mp3.attr('src','mp3/2.mp3');
    document.getElementById("doorbell").load();
    $('#back').attr('class','back pgback'+index);
    var _timer = setTimeout(function () {
        //HTML5 Audio API 手机端支持度不太清楚，没用它的回调函数
        mp3.attr('src','mp3/3.mp3');
        document.getElementById("doorbell").load();
        clearTimeout(_timer);
    },1000)

})
touch.on('.express-box', 'tap', function(){
    mp3.attr('src','mp3/4.mp3');
    document.getElementById("doorbell").load();
    cmCenter.addClass('scaleOut');
    cmBottom.removeClass('none');
    noticeBg.attr('src','img/notice-bg'+index+'.jpg')
    var _timer= setTimeout(function () {
        mp3.attr('src','mp3/5.mp3');
        document.getElementById("doorbell").load();
        $('.finger2').removeClass('none');
        clearTimeout(_timer);
    },2000)
})
touch.on('#back', 'tap', function(){
    cmCenter.removeClass('scaleOut');
    $('div[data-item|="'+index+'"]').removeClass('pageSwiper').addClass('pageOutTop2');
    $('.page-who').addClass('pageInTop');
    expressMain.addClass('pageOutTop');
    $('.finger2').addClass('none');
    var _timer = setTimeout(function () {
        //返回的时候还原成之前的class
        expressMain.addClass('none').removeClass('pageOutTop');
        cmCenter.addClass('none');
        cmBottom.addClass('none');
        $('div[data-item|="'+index+'"]').removeClass('current pageOutTop2');
        $('.page-who').removeClass('pageInTop');
        clearTimeout(_timer);
    },800)
})



















