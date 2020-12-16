

$(function(){

                         // upper bar
$(".slider,.carousel-item").height($(window).height() - ($(".upperbar").innerHeight() + $(".navbar").innerHeight()))

                         // upper bar










                                          // featured-work


$(".featured-work li").on("click",function(){


  $(this).addClass("active").siblings().removeClass("active");

  if($(this).data("class") === ".all"){
    $(".shuffle-img div").css("display","block");
  }
  else{

    $(".shuffle-img div").hide();

    $($(this).data("class")).css({"display":"block"});
  }

});

                                          // featured-work














});
