(function(){
	$.get("https://raw.githubusercontent.com/phongprogunny01/baymack/master/key.json",function(data){
		if(JSON.parse(data).key=="713e3042bff390889df44fd3a51285f9"){
			baymack();
		}
	});
function baymack(){
	if(window.location.href=="https://www.baymack.com/"){
		window.location = "https://www.baymack.com/vids";
	}else if(window.location.href=="https://www.baymack.com/vids"){
		
	}else if(window.location.href=="https://www.baymack.com/prizes"){

	}else if(window.location.href.substring(0, 35)=="https://api.login.yahoo.com/oauth2/"){
		var inter = setInterval(function(){
			if($("button[name='agree']").is(":visible")){
				$("button[name='agree']")[0].click();
				clearInterval(inter);
			}
		},2000);
	}else if((location.href).substring(0,30)=="https://www.youtube.com/embed/"){
		var sendMessage = function (msg) {
			window.parent.postMessage(msg, '*');
		};
		setInterval(function(){
			if($("button[class='ytp-large-play-button ytp-button']").is(":visible")){
				$("button[class='ytp-large-play-button ytp-button']").click();
			}
			if($("button[class='ytp-ad-skip-button ytp-button']").is(":visible")){
				$("button[class='ytp-ad-skip-button ytp-button']").click();
			}
			if($("div[class='ytp-offline-slate-bar']").is(":visible")){
				sendMessage("reload");
			}
		},3000);
	}
}



})()









