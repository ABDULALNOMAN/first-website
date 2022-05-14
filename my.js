$(document).ready(function () {
  $(".btn1").click(function(){
    $(".moon").fadeOut("first",function(){
      $(".sun").fadeIn("slow");
    });
  })
  $(".btn2").click(function(){
    $(".sun").fadeOut("first",function(){
      $(".moon").fadeIn("slow");
    });
  })
  $("#solar").mouseenter(function () { 
    $(".image").fadeIn(5000);
  });
});