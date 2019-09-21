(function(){
	$.get("https://raw.githubusercontent.com/phongprogunny01/baymack/master/key.json",function(data){
		if(JSON.parse(data).key=="713e3042bff390889df44fd3a51285f9"){
			baymack();
		}
	});
function baymack(){
//--------------------------------Main Page------------------------------------------------------
	if(window.location.href=="https://www.baymack.com/"){
		window.location = "https://www.baymack.com/vids";
//--------------------------------View video----------------------------------------------------
	}else if(window.location.href=="https://www.baymack.com/vids"){
//--------------------------------Redeem money--------------------------------------------------	
	}else if(window.location.href=="https://www.baymack.com/prizes"){
		var redeem = document.createElement("input");
		redeem.id = "redeem";
		redeem.style = "position: fixed;z-index: 9999999;top: 5%;width: 500px;left: 1%;cursor: pointer; display: block;";
		//redeem.innerText ="cc";
		document.documentElement.appendChild(redeem);
		if(localStorage.getItem("redeem")!=null){
			$("#redeem").val(localStorage.getItem("redeem"));
			var interval_color = setInterval(function(){
				if($("tbody tr:eq(0) td:eq(2) a").css("background-color")=="rgb(95, 209, 52)"){
					clearInterval(interval_color);
					$("tbody tr:eq(0) td:eq(2) a")[0].click();
					var interval_show_table = setInterval(function(){
						if($("#subGiftCard").is(":visible")){
							clearInterval(interval_show_table);
							$("#userEmail").val(localStorage.getItem("redeem"));
							setTimeout(function(){
								$("#subGiftCard")[0].click();
							},500);
						}
					},500);
				}
			},500);
		}
		$("#redeem").change(function(){
			localStorage.setItem("redeem",$("#redeem").val());
			alert("Auto redeem to email: "+localStorage.getItem("redeem"));
		});
//--------------------------------Login Yahoo--------------------------------------------------
	}else if(window.location.href.substring(0, 35)=="https://api.login.yahoo.com/oauth2/"){
		var inter = setInterval(function(){
			if($("button[name='agree']").is(":visible")){
				$("button[name='agree']")[0].click();
				clearInterval(inter);
			}
		},2000);
//---------------------------------Youtube----------------------------------------------------
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









