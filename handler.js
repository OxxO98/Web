//윈도우 객체 탐색
//중앙 정렬 함수
var timer = null;

$(document).ready(resizeDone());

window.addEventListener('resize', function() {
  clearTimeout( timer );
  timer = setTimeout( resizeDone, 150 );
});

function resizeDone(){
  if(window.matchMedia("(min-width : 811px)").matches){
    if(1620 <= window.innerWidth){
      $("body").css("marginLeft", (window.innerWidth-1620)/2 + "px");
      console.log(window.innerWidth);
    }
    else if (810 <= window.innerWidth && window.innerWidth < 1620){
      $("body").css("marginLeft", (window.innerWidth-810)/2 + "px");
      console.log(window.innerWidth);
    }
    else{
      $("body").css("marginLeft", "0px");
    }
  }
  else{
    $("body").css("marginLeft", "0px");
  }
  scrollHeader("none");
}

//scroll
$(window).scroll( function (){
    if($(document).scrollTop() >= 120){
      if( $("#header.scroll").length == false){
        scrollHeader();
      }
    }
    else{
      $("#header").css("padding-left", "0px");
      $("#header").css("padding-right", "0px");
      $("#header").removeClass("scroll");
    }
  }
);

function scrollHeader( animate ){
  if(animate != "none"){
    $("#header").hide();
    $("#header").addClass("scroll");
    $("#header.scroll").fadeIn(150);
  }
  var paddingLeftSum = Number( $("body").css("margin-left").replace("px", "") );
  paddingLeftSum +=  Number( $("#wrap").css("padding-left").replace("px", "") );
  var paddingRightSum = Number( $("body").css("margin-left").replace("px", "") );
  paddingRightSum +=  Number( $("#wrap").css("padding-right").replace("px", "") );

  $("#header.scroll").css("padding-left", paddingLeftSum);
  $("#header.scroll").css("padding-right", paddingRightSum);
}

// matchHeader($("#header"));
matchKikubanColumns($("#index"));
// matchKikubanColumns($("#container"));
