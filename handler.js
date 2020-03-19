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
    $("#wrap").css("marginRight", "0px");
  }
}

matchHeader($("#header"));
matchKikubanColumns($("#index"));
matchKikubanColumns($("#container"));
