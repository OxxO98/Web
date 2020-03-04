window.addEventListener('resize', function() {
  if(1640 < window.innerWidth){
    document.getElementById('wrap').style.marginLeft=(window.innerWidth-1640)/2+'px';
    console.log(document.getElementById('wrap').style.marginLeft);
  }
}, true);
// 일단 중앙정렬
