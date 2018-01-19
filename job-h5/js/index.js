/**
 * bug 连续滑动导致isAnimating赋值失效
 *
 */
var isAnimating = false,
    that,csslist,pn,t;
//向上滑动
touch.on('.container', 'swipeup', function(){
    initVar($(this));
    if(that.attr('data-item') == 2){
        pn = that.next();
        addClass('page-move-up','current page-move-up');
        removeClass('','page-move-up');
    }else{
        //最后一页不能上滑
        if(that.attr('data-index') < 5){
            //第一页上滑翻1页,其他页上滑翻2页
            if(that.attr('data-index')==1){
                pn = that.next();
            }else{
                pn = that.next().next();
            }
            addClass('page-move-up','current page-move-up');
            removeClass('','page-move-up');
        }else{
            isAnimating=false;
        }
    }
});
//向下滑动
touch.on('.container', 'swipedown', function(){
    initVar($(this));
    if(that.attr('data-item') == 2){
        if(that.attr('data-index') == 2){
            pn = that.prev().prev();
        }else{
            pn = that.prev().prev().prev();
        }
        addClass('page-move-down','current page-move-down');
        removeClass('','page-move-down');
    }else{
        //第一页不能下滑
        if(that.attr('data-index') > 1){
            //最后页下滑翻1页,其他页下滑翻2页
            if(that.attr('data-index')==2){
                pn = that.prev();
            }else{
                pn = that.prev().prev();
            }
            addClass('page-move-down','current page-move-down');
            removeClass('','page-move-down');
        }else{
            //第一页上滑和最后一页下滑是没有动画效果的
            isAnimating=false;
        }
    }
});
//向左滑动
touch.on('.container', 'swipeleft', function(){
    initVar($(this));
    if(1<that.attr('data-index') && that.attr('data-index')<5){
        if(that.attr('data-item') == 1){
            pn = that.next();
            addClass('page-move-left','current page-level1 page-move-left');
            removeClass('','page-move-left page-level1');
        }else{
            isAnimating=false;
        }
    }else{
        isAnimating=false;
    }
});
//向右滑动
touch.on('.container', 'swiperight', function(){
    initVar($(this));
    if(1<that.attr('data-index') && that.attr('data-index')<5){
        if(that.attr('data-item') == 2){
            pn = that.prev();
            addClass('page-move-right page-level2','current page-level3 page-move-right');
            removeClass('page-level2','page-move-right page-level3');
        }else{
            isAnimating=false;
        }
    }else{
        isAnimating=false;
    }
});
//初始化对象
function initVar(obj) {
    if(isAnimating) return;
    //获得page页面对象
    that = obj.parents('.page').length ? obj.parents('.page') : obj;
    //获得page页面对象之前的class
    csslist = that.attr('class');
    isAnimating=true;
}
function addClass(str1,str2) {
    that.addClass(str1);
    pn.addClass(str2);
}
//翻页完成后去掉翻页动画效果类并添加图片动画效果类
function removeClass(str1,str2) {
    t = setTimeout(function () {
        that.attr('class',csslist).removeClass('current '+str1);
        pn.removeClass(str2);
        isAnimating=false;
        clearTimeout(t);
    }, 600);
}