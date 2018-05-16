//倒计时
function countdown(beginTime,endTime){ 
	var remainTime='0';
	var NowTime = new Date(); 
	//var BeginTime = new Date(Date.parse(beginTime.replace(/-/g,"/"))); 
	var maxT=30*1000 * 60 * 60 * 24;//最多30天
	if(!!endTime){
		var EndTime= new Date(Date.parse(endTime.replace(/-/g,"/")));  
		var nMS=EndTime.getTime() - NowTime.getTime(); 
		if (nMS>maxT){
			nMS=parseInt(maxT)-1;
		}
	}
	else{
		var nMS=parseInt(maxT)-1; 
	}
	var nD=Math.floor(nMS/(1000 * 60 * 60 * 24)); 
	var nH=Math.floor(nMS/(1000*60*60)) % 24; 
	var nM=Math.floor(nMS/(1000*60)) % 60;  
	//var nS=Math.floor(nMS/1000) % 60; 
	if(nD>= 0){  
		if(nD == 0){
//			if(nH == 0){
//			remainTime='剩余<span class="time" id="RemainM">'+nM+'</span>分';
//			}
//			else{
//			remainTime='剩余<span class="time" id="RemainH">'+nH+'</span>小时<span class="time" id="RemainM">'+nM+'</span>分';
//			}
			remainTime=0;
		}
		else{
//			remainTime='剩余<span class="time" id="RemainD">'+nD+'</span>天<span class="time" id="RemainH">'+nH+'</span>小时<span class="time" id="RemainM">'+nM+'</span>分';
			remainTime=nD;
		}
		$(".freeRegister .leftTime").html(remainTime);
		s=function(){countdown(beginTime,endTime)};
		setTimeout(s,5001); 
	}  
	else {  
		$(".freeRegister .leftTime").html(remainTime);  
	}  
}  
var t;
var speed = 2;//图片切换速度
var nowlan=0;//图片开始时间
function changepic() {
	var imglen = $(".recommend .recommendContent .recommendSection.active li.roll").find("a").length;
	if(imglen>0){
		$(".recommend .recommendContent .recommendSection.active li.roll").find("a").hide();
		for(var n=0;n<20;n++){
			$(".recommend .recommendContent .recommendSection.active li.roll").find("a").eq(nowlan).show();
			nowlan++;
			if(nowlan>=imglen){
				nowlan=0;
			}
		}
		//console.log(imglen)
		t = setTimeout("changepic()", speed * 1000);
	}
}
$(function(){
	if($(".tabs ul li").length>0){
		$(".tabs ul li").on("mouseenter",function(){
			$(".tabs ul li").removeClass("active");
			$(this).addClass("active");
			var forId=$(this).data("for");
			$(".tabsContent .tabSection").removeClass("active");
			$("#"+forId).addClass("active");			
		})
	}
	if($(".recommendList li").length>0){
		$(".recommendList li").on("mouseenter",function(){
			var forId=$(this).data("for");
			if($("#"+forId).length==0){
				return false;
			}
			//console.log($(this).index())
			if($(this).index()<7){
				$(".recommend .recommendList li:nth-child(n+8)").css("margin-top","283px");
				$("#"+forId).css("top","-330px");				
			}
			else {
				$(".recommend .recommendList li:nth-child(n+8)").css("margin-top","0")
				$("#"+forId).css("top","-3px");
			}
			$(".recommendList li").removeClass("active");
			$(this).addClass("active");
			$(".recommendContent .recommendSection").removeClass("active");
			$("#"+forId).addClass("active");
			clearInterval(t);
			changepic();
			//鼠标在图片上悬停让切换暂停
			$(".recommend .recommendContent .recommendSection.active li.roll").hover(function () { clearInterval(t); });
			//鼠标离开图片切换继续
			$(".recommend .recommendContent .recommendSection.active li.roll").mouseleave(function () { changepic(); });
			
		})
		changepic();
		//鼠标在图片上悬停让切换暂停
		$(".recommend .recommendContent .recommendSection.active li.roll").hover(function () { clearInterval(t); });
		//鼠标离开图片切换继续
		$(".recommend .recommendContent .recommendSection.active li.roll").mouseleave(function () { changepic(); });
	}
	
})