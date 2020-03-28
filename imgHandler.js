var imgObj = function(sw, sh, bw, bh){
  this.small[0] = sw;
  this.small[1] = sh;
  this.big[0] = bw;
  this.big[1] = bh;
};

var setImg = function(obj){
	var target, size, sizeBig, sizeSmall, imgSprite;
  var type;

	var sizeSlice = function(string){
    var split = string.split(' ');

		return {
      width : split[0],
      height : split[1]
    };
	}

	if(obj.hasOwnProperty("target")){
		this.target = obj.target;
	}
	if(obj.hasOwnProperty("size")){
		this.size = sizeSlice(obj.size);
    type = "event"
  }
  else{
    type = "media";
  }
	if(obj.hasOwnProperty("sizeBig")){
		this.sizeBig = sizeSlice(obj.sizeBig);
	}
	if(obj.hasOwnProperty("sizeSmall")){
		this.sizeSmall = sizeSlice(obj.sizeSmall);
	}
	if(obj.hasOwnProperty("imgSprite")){
		this.imgSprite = obj.imgSprite;
	}

	//if media
	if(type == "media"){
		if(matchingCSS() == "small"){
      this.target.css("background-image", "url('"+this.imgSprite+"'");
      this.target.css("width", this.sizeSmall.width);
      this.target.css("height", this.sizeSmall.height);
      this.target.css("background-position", "0 -"+this.sizeBig.height+"px");
      console.log("samll");
		}
    else if(matchingCSS() == "big"){
      this.target.css("background-image", "url('"+this.imgSprite+"'");
      this.target.css("width", this.sizeBig.width);
      this.target.css("height", this.sizeBig.height);
      console.log("big")
    }
	}
	//if event
	if(type == "event"){
		// target.addEventListener("scroll", function(){});
    console.log("event");
	}
}

function matchingCSS(){
  if(window.matchMedia("(max-width : 810px)").matches){
    return "small";
  }
  else if(window.matchMedia("(max-width : 1620px) and (min-width : 811px)").matches){
    return "small";
  }
  else if(window.matchMedia("(min-width : 1621px)").matches){
    return "big"
  }
}

//이미지 오브젝트 생성
//받아서 반응형 크기 확인
//모션이 있는 객체면 모션 이벤트 걸기
//setImg 함수만 handler로 갈 예정
