//윈도우 객체 탐색
//중앙 정렬 함수
var timer = null;
window.addEventListener('resize', function() {
  clearTimeout( timer );
  timer = setTimeout( resizeDone, 150 );
});
function resizeDone(){
  if(1536 <= window.innerWidth){
    $("#wrap").css("marginLeft", (window.innerWidth-1536)/2 + "px");
    console.log(window.innerWidth);
  }
  else{
    $("#wrap").css("marginLeft", "0px");
  }
}
//kikuban
var columnWidth = 246;
var columnGap = 12;
var webSixColumn = (columnWidth+"px ").repeat(6);
var webFourColumn = "375px 375px 375px 375px";
var webThreeColumn = (columnWidth*2+columnGap+"px ").repeat(3);
var webTwoColumn = (columnWidth*3+columnGap*2+"px ").repeat(2);
var iPhoneTwoColumn = "375px 375px";
var iPhoneOneColumn = "762px";

webSixColumn = webSixColumn.substring(0, webSixColumn.length-1);
webThreeColumn = webThreeColumn.substring(0, webThreeColumn.length-1);
webTwoColumn = webTwoColumn.substring(0, webTwoColumn.length-1);

if(window.matchMedia("(max-width: 1536px)").matches){
  //iPad
  if( $(".kikuban1 .kikuban2").css("grid-template-columns") == webSixColumn ){
    //6단일때 3단으로 바꾸기
    $(".kikuban1 .kikuban2").css("grid-template-columns", webThreeColumn);
  } else if ( $(".kikuban1 .kikuban2").css("grid-template-columns") == webFourColumn ) {
    //4단일때 2단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", webTwoColumn);
  } else if ( $(".kikuban1").css("grid-template-columns") == webThreeColumn ) {
    //3단일때 1단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", "1536px");
  } else if ( $(".kikuban1").css("grid-template-columns") == webTwoColumn ) {
    //2단일때 1단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", "1536px");
  }
} else if(window.matchMedia("(max-width: 768px)").matches){
  //iPhone
  if( $(".kikuban1 .kikuban2").css("grid-template-columns") == webSixColumn ){
    //6단일때 2단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", iPhoneTwoColumn);
  } else if ( $(".kikuban1 .kikuban2").css("grid-template-columns") == webFourColumn ) {
    //4단일때 2단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", iPhoneTwoColumn);
  } else if ( $(".kikuban1").css("grid-template-columns") == webThreeColumn ) {
    //3단일때 1단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", iPhoneOneColumn);
  } else if ( $(".kikuban1").css("grid-template-columns") == webTwoColumn ) {
    //2단일때 1단으로 바꾸기
    $(".kikuban1").css("grid-template-columns", iPhoneOneColumn);
  }
} else {
  //web
}
