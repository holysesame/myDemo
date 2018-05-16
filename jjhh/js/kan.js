$(function(){
	var t;
	if($(".classSection li.tabToggle").length > 0){
		var isLogin=$("#isLogin").val()==0?false:true;
//		$(".classSection li.tabToggle").on("mouseenter",function(){
//			if(!isLogin){
//				$(".comments", this).html("<a href='#'>请先登录！</a>");
//			}
//			$(".classSection li.tabToggle").removeClass("active");
//			$(".classSection li.tabToggle").css("margin-bottom","6px");
//			$(this).addClass("active");
//			if ($(this).index()%2==0){
//				$(".information", this).css("left","-5px");
//				$(this).next().css("margin-bottom","323px");
//				//$(this).next().next().css("margin-top","520px");
//				//$(this).next().next().next().css("margin-top","520px");
//			}
//			else {
//				$(this).css("float","right")
//				$(".information", this).css("left","-508px");
//				$(this).prev().css("margin-bottom","323px");
//				//$(this).next().css("margin-top","520px");
//				//$(this).next().next().css("margin-top","520px");
//			}
//		})
		$(".classSection li.tabToggle .buttonSection .btn").on("click", function(){
			if(isLogin){
				if(!$(this).data("isClicked")){
					$(this).parent().parent().find(".wanted em").html(Number($(this).parent().parent().find(".wanted em").html())+1);
					$(this).data("isClicked", "true");
				}
				else {
					alert("已经砍过了!")
				}
			}
			else {
				alert("请先登录!")
			}
			return false;
		})
	}
	
})