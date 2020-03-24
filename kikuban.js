//kikuban

//변수 선언
var smallThreeColumn = "1fr 1fr 1fr";
var smallTwoColumn = "1fr 1fr";
var smallOneColumn = "1fr";

//이미지 수정
function imagerRatioEdit(target, ratio){
  console.log(target.find("img"));

  var imgArr = target.find("img");
  imgArr.each(function(){
    var origin = $(this).width();
    $(this).css("width", origin/ratio+"px");
  });

}
//이미지 넓이기준 수정
function imagerWidthEdit(target, width){
  console.log(target.find("img"));

  var imgArr = target.find("img");
  imgArr.each(function(){
    var origin = $(this).width();
    $(this).css("width", width+"px");
  });

}
//2xcol정리하기
function col2xEdit(target, column){
  target.after("<div class=\"kikubanAppend\"></div>");

  target.siblings(".kikubanAppend").css("display", "grid");
  target.siblings(".kikubanAppend").css("grid-template-columns", smallTwoColumn);

  var tmp1 ="", tmp2="";

  for(i=0; i<column/2; i++){
    tmp1 += "<div>";
    tmp1 += $(".kikuban2").children("div").eq(i+column/2).html();
    tmp1 += "</div>";
  }
  for(i=0; i<column/2; i++){
    tmp2 += "<div>";
    tmp2 += $(".kikuban2").children("div").eq(i+column/2*2).html();
    tmp2 += "</div>";
  }
  for(i=0; i<column/2; i++){
    target.children("div").eq(i+column/2).hide();
    target.children("div").eq(i+column/2*2).hide();
  }

  target.siblings(".kikubanAppend").html(tmp1);
}
//3xcol정리하기
function col3xEdit(target, column){
  target.after("<div class=\"kikubanAppend\"></div>");
  target.after("<div class=\"kikubanAppend\"></div>");

  target.siblings(".kikubanAppend").css("display", "grid");
  target.siblings(".kikubanAppend").css("grid-template-columns", smallTwoColumn);

  var tmp1 ="", tmp2="";

  for(i=0; i<column/3; i++){
    tmp1 += "<div>";
    tmp1 += $(".kikuban2").children("div").eq(i+column/3).html();
    tmp1 += "</div>";
  }
  for(i=0; i<column/3; i++){
    tmp2 += "<div>";
    tmp2 += $(".kikuban2").children("div").eq(i+column/3*2).html();
    tmp2 += "</div>";
  }
  for(i=0; i<column/3; i++){
    target.children("div").eq(i+column/3).hide();
    target.children("div").eq(i+column/3*2).hide();
  }

  target.siblings(".kikubanAppend").html(tmp1);
  target.siblings(".kikubanAppend").next().html(tmp2);
}
//국배판 추가
function appendKikuban(target, column, device){
  if(device == "Medium"){

  } else if(device == "small"){
    if(column == 6){
      target.css("grid-template-columns", smallTwoColumn);
      col3xEdit(target, 6);
    } else if(column == 4){
      target.css("grid-template-columns", smallTwoColumn);
      col2xEdit(target, 4);
    } else if(column == 3){
      target.css("grid-template-columns", smallOneColumn);
      col3xEdit(target, 3);
    } else if(column == 2){
      target.css("grid-template-columns", smallTwoColumn);
    } else {
      target.css("grid-template-columns", smallOneColumn);
      target.css("height", "1134px");
      imagerRatioEdit(target, 2);
    }
  }
}
//칼럼 매칭
function matchKikubanColumns (target){
  if( $(target).children(".kikuban1").length){
    target = target.children(".kikuban1");
  } else {
    target = target.children(".kikuban2");
  }

  var col = target.css("--col");
  console.log(target.css("--col"));

  if (window.matchMedia("(max-width: 1620px) and (min-width: 811px)").matches){
    //styleMedium
    appendKikuban(target, col, "Medium");
  } else if(window.matchMedia("(max-width: 810px)").matches){
    //styleSmall
    appendKikuban(target, col, "small");
  } else {
    //styleBig
  }
}
