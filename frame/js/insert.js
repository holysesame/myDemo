//插入html块
function insertBlock(p){
	var insertHtml="";
	switch(p){
		case "header":
			insertHtml = '<a id="logo" href="javascript:void(0)">BizStar<span>Admin Panel</span></a>	<h1>首页</h1>	<div class="extraBar">		<div class="moreOption"><span class="flag">&nbsp;</span>			<ul>				<li><a href="javascript:void(0)">首页</a></li>				<li><a href="javascript:void(0)">刷新</a></li>				<li><a href="javascript:void(0)">退出</a></li>			</ul>		</div>	</div>	<nav><span class="flag">&nbsp;</span><span class="userInfo">欢迎您：<strong>admin</strong></span>		<ul class="menu">			<li><a href="main.html"><span>总览</span></a></li>			<li><a href="layout.html"><span>布局</span></a></li>			<li><a href="javascript:void(0)"><span>单品</span></a>				<ul>					<li><a href="javascript:void(0)"><span>单品管理</span></a></li>					<li><a href="javascript:void(0)"><span>单品分类管理单品分类管理单品分类管理单品分类管理</span></a></li>					<li><a href="javascript:void(0)"><span>搜索条件管理</span></a></li>					<li><a href="javascript:void(0)"><span>Tags</span></a><span class="more"></span>						<ul>							<li><a href="javascript:void(0)"><span>Pending Tagged</span></a></li>							<li><a href="javascript:void(0)"><span>All Tagged</span></a></li>						</ul>					</li>					<li><a href="javascript:void(0)"><span>单品导出</span></a></li>				</ul>			</li>			<li><a href="javascript:void(0)"><span>搭配</span></a>				<ul>					<li><a href="javascript:void(0)"><span>搭配管理</span></a></li>					<li><a href="javascript:void(0)"><span>Tags</span></a><span class="more">&nbsp;</span>						<ul>							<li><a href="javascript:void(0)"><span>Pending Tagged</span></a></li>							<li><a href="javascript:void(0)"><span>All Tagged</span></a></li>						</ul>					</li>					<li><a href="javascript:void(0)"><span>评论管理</span></a></li>				</ul>			</li>			<li><a href="javascript:void(0)"><span>专辑</span></a>				<ul>					<li><a href="javascript:void(0)"><span>专辑管理</span></a></li>					<li><a href="javascript:void(0)"><span>专辑分类管理</span></a></li>				</ul>			</li>		</ul>	</nav>';
		break;
		case "footer":
			insertHtml = '<div><a href="javascript:void(0);">left link</a></div>	<div>Ver 0.0.1</div>	<div><a href="javascript:void(0);">right link</a><br>		Copyright (c) 2011 By holysesame</div>';
		break;
	}
	document.write(insertHtml);
}
//function readHTML(f){
//	var fileName=f;
//	$.ajax({
//	async:false,
//	url : fileName,
//	success : function(result){
//		alert(result);
//	}
//	});
//} 
