$(function(){$("a").each(function(){void 0!==$(this).attr("href")&&-1!==$(this).attr("href").indexOf("?demo-page")&&$(this).attr("href","/p/demo.html?redirected="+$(this).attr("href").replace(/\?demo\-page/,""))});$(".post-body .slider br").remove();$(".post-body .slider-carousel").each(function(){var a=$(this).attr("data-items"),b="true"==$(this).attr("data-autoplay")?!0:!1;$(".post-body .slider-carousel").owlCarousel({rtl:"rtl"===b_dir?!0:!1,autoplay:b,items:a,dots:!0,loop:!0,margin:10,autoplayHoverPause:!0, nav:!0,navText:["\uf104","\uf105"],navSpeed:500,dotsSpeed:500,responsive:{0:{items:1},480:{items:2},768:{items:3},900:{items:a}}});$(this).fadeIn()});$(".post-body .slider-cover").each(function(){var a="true"==$(this).attr("data-autoplay")?!0:!1;$(".post-body .slider-cover").owlCarousel({rtl:"rtl"===b_dir?!0:!1,autoplay:a,nav:!0,loop:!0,dots:!0,autoHeight:!0,items:1,autoplayHoverPause:!0,navText:["\uf104","\uf105"]});$(this).fadeIn()})});