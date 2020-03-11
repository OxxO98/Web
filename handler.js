//윈도우 객체 탐색
var timer = null;
window.addEventListener('resize', function() {
  clearTimeout( timer );
  timer = setTimeout( resizeDone, 150 );
});
function resizeDone(){
  if(1640 <= window.innerWidth){
    $("#wrap").css("marginLeft", (window.innerWidth-1640)/2 + "px");
    console.log(window.innerWidth);
  }
  else{
    $("#wrap").css("marginLeft", "0px");
  }
}
//중앙 정렬 함수
