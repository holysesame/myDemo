var $j = jQuery.noConflict();
//网站域名
var domainName="http://dongdamen.yiss.com"
// ajax url路径通用部分
var ajax_url = "http://localhost";
//网站页面路径;
var front_url = "http://localhost";
//网站页面用到的样式，js的服务器路径;
var frontJsCss="http://localhost";
//网站页面用到的图片路径;
var frontIcon="http://localhost";
//内存更新地址集合
var restartupArry=["http://localhost/restartup.html"]; 

//自动跳转
var formBrowser = {
				  versions: function () {
					  var u = navigator.userAgent.toLowerCase();
					  return { // 客户端浏览器版本信息
						  trident: u.indexOf('trident') > -1, // IE内核
						  webKit: u.indexOf('applewebkit') > -1, // 苹果、谷歌内核
						  mobile:  u.indexOf('mobile') > -1, // 是否为移动终端
						  android: u.indexOf('Aandroid') > -1, // android终端或者uc浏览器
						  iPhone: u.indexOf('iphone') > -1, // 是否为iPhone
						  iPad: u.indexOf('ipad') > -1, // ipad
						  midp: u.indexOf('midp') > -1, // midp
						  uc7: u.indexOf('rv:1.2.3.4') > -1, // uc7
						  ucmoblie: u.indexOf('ucbrowser') > -1, // uc moblie
						  baidumoblie: u.indexOf('baidubrowser') > -1, // baidu moblie
						  ce: u.indexOf('windows ce') > -1, // windows ce
						  wm: u.indexOf('windows mobile') > -1 // windows mobile
					  };
				  } ()
			  }
var isMobile,isJumped=false;;
// 是否为移动终端
if(formBrowser.versions.android || formBrowser.versions.iPhone || formBrowser.versions.iPad || formBrowser.versions.midp || formBrowser.versions.uc7 || formBrowser.versions.ucmoblie || formBrowser.versions.baidumoblie || formBrowser.versions.ce || formBrowser.versions.wm){
	isMobile=true;
}
else {
	isMobile=formBrowser.versions.mobile;
}
var upathname=window.location.pathname;
var isIndex=(upathname=="/"||upathname=="/index.html"||upathname=="/index.htm")//是否是首页
//if(isIndex&&!isJumped){
//	if(isMobile){
//		 window.location.href = "http://d.yiss.com";
//	}
//	isJumped=true;
//}

