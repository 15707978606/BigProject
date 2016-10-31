require.config({
    baseUrl:"js/",
    paths:{  //修改模块名称:默认是以目录的地址为模块名
        sa:"lib/swiper", //别名: 目录地址模块名
        sb:"lib/swiper.animate1.0.2.min",
        sc:"lib/flexible.debug",
        sd:"lib/flexible_css.debug"
    },
    shim:{  //把非AMD编写的模块转成AMD的模块进行执行
        'sa':{
            exports:"sa"
        },
        'sb':{
            deps:["sa"],
            exports:"sb"
        },
        'sc':{
            exports:"sc"
        },
        'sd':{
            exports:"sd"
        }
    }
});


require(["sa","sb","sc","sd"],function(a,b,c,d){
    var swiper = new  a(".swiper-container", {
        direction: "vertical",
        //autoplay:2000,
        loop: true,
        effect:"coverflow",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    var musicC = document.querySelector(".music-c");
    var musicNote = document.querySelector(".music-note");
    var audio = document.querySelector("audio");
    musicC.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
            musicNote.style.zIndex = 2;
            musicC.style.animationPlayState="running";
        }
        else{
            musicNote.style.zIndex = -1;
            audio.pause();
            musicC.style.animationPlayState="paused";
        }
    })
})
