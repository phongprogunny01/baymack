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
		
		
		
		
		


//------------------------------------Start vids--------------------------------------------------------------
	var thu_nho_xong = 0;
	var click_xong = 0;
	var tat_xong = 0;
	var setcsdl_xong = 0;
	var choose = [];
	var index  = "";
	var delay = 0;
	var right = '';
	var idvideo = '';
	var captcha_xong = 0;
	var time_ht = '';
	var time_qk = '';
	var count_stop = 0;
	var field = [];
	var get_csdl = [];
	var get_csdl_xong = 0;
	var choose_xong = 0;
	var mode_auto =  0 ;
	var count_captcha_show = 0;
	var api = "";
	var count_in_php = 0;
	key ='';
	
	field[field.length] = '%20Auto%20';							//1
	field[field.length] = '%20Comedy%20';						//2
	field[field.length] = '%20Entertainment%20';				//3
	field[field.length] = '%20Film%20';							//4
	field[field.length] = '%20Food%20';
	field[field.length] = '%20Gaming%20';
	field[field.length] = '%20News%20&amp;%20Politics%20';
	field[field.length] = '%20None%20';
	field[field.length] = '%20Nonprofits%20';
	field[field.length] = '%20Technology%20';
	field[field.length] = '%20Education%20';
	field[field.length] = '%20Music%20';
	field[field.length] = '%20People%20&amp;%20Blogs%20';
	field[field.length] = '%20Pets%20';
	field[field.length] = '%20Sci-Fi%20';
	field[field.length] = '%20Travel%20';
	field[field.length] = '%20How-to%20';
	field[field.length] = '%20Travel%20&amp;%20Events%20';
	field[field.length] = '%20Sports%20';
	field[field.length] = '%20Family%20Entertainment%20';		//20
	
	wcodebyttp(1);
function get_csdl_func(idvideo){
	$.get( "https://antinodal-layers.000webhostapp.com/getcsdl.php?link="+idvideo, function( data,status ) {
	  if(data!="no data"&&data!="connect sql error"&&data!="error link"){
		var data = JSON.parse(data);
		for (var i=0;i<data.length;i++) 
			get_csdl[i] = data[i];
	  }
	  else {
		  get_csdl=[];
	  }
		
	}).fail(function() {
		setTimeout(function(){
			get_csdl_func(idvideo);
		},3000);
	});
}
function click_answer(n){
	$("ul[class='link-btn-list video-category-options'] li a")[n].click();
	index = n;
}
function stop_video(){
	iframe = document.getElementById($("youtube-player iframe").attr("id"));
	iframe.contentWindow.postMessage('play', '*');
}
function next_video(){
	$("#nextvideo")[0].click();
}
function wcodebyttp(c){
	if(c){
		$("#loading").remove();
		var interval = setInterval(function(){
			api = 'bxxmmwtqcjkh4rcbdffjk2dv3p96lyvq';
			if(window.location.href=="https://www.baymack.com/"){
				window.location = "https://www.baymack.com/vids";
			}
			else if(window.location.href=="https://www.baymack.com/entry"){
				if(idvideo!='')
					if(setcsdl_xong == 0){
						setcsdl_xong = 1;
						$.get( "https://antinodal-layers.000webhostapp.com/setcsdl.php?link="+idvideo+"&choose="+encodeURIComponent(choose[index])+"&right=1", function( data,status ) {
						  if(data=="add data error") alert("error field");
						  window.location = "https://www.baymack.com/vids";
						}).fail(function() {
							window.location = "https://www.baymack.com/vids";
						});
					}
				else window.location = "https://www.baymack.com/vids";
			}
			else if(window.location.href=="https://www.baymack.com/vids"&&thu_nho_xong==0){
				//$("iframe").attr("width","100px");
				//$("iframe").attr("height","100px");
				//$("img[src='/assets/images/poster.jpg?v=1']").attr("src","");
				thu_nho_xong = 1;
			}
			else {			
				if(click_xong){	
					delay+=1;				
					if(delay>9){
						click_xong = 0;
						delay = 0;
					}
					else {
						click_xong = 1;
					}
					
				}
				if($("span[class='video-page-current-duration']").html()=="0"){
					if($("span[class='video-page-current-duration']").is(":visible")==0){//khong hien thi thoi gian
						window.location.reload();
					}
					if(click_xong==0){
						index = '';
						idvideo = '';
						click_xong = 1;
						tat_xong=0;
						setcsdl_xong = 0;
						captcha_xong = 0;
						
						get_csdl_xong = 0;
						mode_auto = 0;
						choose = [];
						get_csdl = [];
					}
				}
				else {
					idvideo = $("a[class='twitter']").attr("href").substring(70);
					if(get_csdl_xong==0){
						get_csdl_func(idvideo);
						get_csdl_xong = 1;
					}
//---------------------start = end--------------------------------------
					if($("span[class='video-page-current-duration']").html()==$("span[class='video-page-total-duration']").html()){ 
//-------------------------replay---------------------------------
						if(tat_xong==0&&$("i[class='fa fa-repeat']").is(":visible")==0) {			
							var check_hide = setInterval(function(){
								if($("i[class='fa fa-repeat']").is(":visible")==0&&($("div[class='captchaDivs'] re-captcha div div iframe").is(":visible")||$("ul[class='link-btn-list video-category-options'] li").is(":visible")||$("#nextvideo").is(":visible"))){
									stop_video();
									//console.log("run");
									clearInterval(check_hide);
								}
							},100);				
							tat_xong=1;
						}
						if($("i[class='fa fa-repeat']").is(":visible")&&$("div[class='captchaDivs']").is(":visible")==0&&$("#nextvideo").is(":visible")==0&&$("ul[class='link-btn-list video-category-options']").is(":visible")==0){
							$("#replay_video")[0].click();
							tat_xong = 0;
						}
						if($("div[class='captchaDivs']").is(":visible")==0&&$("#nextvideo").is(":visible")==0&&$("ul[class='link-btn-list video-category-options']").is(":visible")==1){// choose da
							$("#loading").remove();
							choose_xong = 0;
							for (var i = 0;i<4;i++){
								choose[i] = encodeURI($("a[class='border-btn']:eq("+i+")").html());
							}
//----------------choose---------------------------------------------
							if(get_csdl.length==field.length){
								for (var i = 0;i<4&&choose_xong==0;i++){
										for (var j = 0; j <field.length&&choose_xong==0; j++){
											if(choose[i]==field[j]){
												if(get_csdl[j]==1){
													mode_auto = 1;
													click_answer(i);
													choose_xong = 1;
												} 
											}
										}
								}
								for (var i = 0;i<4&&choose_xong==0;i++){
									for (var j = 0; j <field.length&&choose_xong==0; j++){
										if(choose[i]==field[j]){
											if(get_csdl[j]!=0){
												click_answer(i);
												choose_xong = 1;
											} 
										}
									}
								}
								if(choose_xong==0){
									click_answer(0);
									choose_xong = 1;
								}
							}else if(get_csdl.length==0){
								if(choose_xong==0){
									click_answer(0);
									choose_xong = 1;
								}
							}							
						}
// -----------------------captcha----------------------------------------------										
						if($("div[class='captchaDivs']").is(":visible")&&$("#replay_video").is(":visible")==0){
							if(captcha_xong==0){
								var flag_captcha = setInterval(function(){
									if($("div[class='captchaDivs']").is(":visible")&&$("#replay_video").is(":visible")==0){										
										if(count_captcha_show>=5){
											var img = document.createElement("img");
											img.setAttribute("id","loading");
											img.setAttribute("style","position: absolute;top:0;right:0;left:0;bottom:0;z-index:99999;margin:0 auto;margin-top:200px;");
											img.setAttribute("src", "https://media.giphy.com/media/S6O3WJA4RyLGDM45Nu/giphy.gif");
											document.documentElement.appendChild(img);										
											res(api);
											count_captcha_show = 0;
											clearInterval(flag_captcha);
										} 
										count_captcha_show++;
									} else count_captcha_show = 0;
								},1000);
								captcha_xong = 1;
							}
						}
						if($("#nextvideo").is(":visible")){// choose next 
							
							setTimeout(function(){
								next_video();	
							},3000);	
							if($("div[class='watch-vdo-msg'] h2").html()=="Great! You guessed it correctly!"){
								right = 1;
								
							}
							else right = 0;				
							if(setcsdl_xong==0){
		
								if((right&&mode_auto==0)||(!right)){
									if($("div[class='watch-vdo-msg']").is(":visible")||$("div[class='watch-vdo-msg wrong']").is(":visible")){
										$.get( "https://antinodal-layers.000webhostapp.com/setcsdl.php?link="+idvideo+"&choose="+encodeURIComponent(choose[index])+"&right="+right, function( data,status ) {
											if(data=="add data error") alert("error field");
										});
									}
								}
								setcsdl_xong = 1;
							}
						}
					}
				}
				
			}
			
		},1000);
	}
}
function check(id,api){
	setTimeout(function(){
		$.get( "http://azcaptcha.com/res.php?key="+api+"&action=get&json=1&id="+id, function(data) {
			console.log(data);
			if (JSON.parse(data).request=="CAPCHA_NOT_READY"){
				check(id,api);
			} else if(JSON.parse(data).status==1){
				recaptcha_v2(JSON.parse(data).request);
				$("#loading").remove();
			}
		/*	if(data.substring(0, 2)=="OK"){
				token = data.substring(3);
				recaptcha_v2(token);
				$("#loading").remove();
			}else if(data=="ERROR_CAPTCHA_UNSOLVABLE"||data=="ERROR_BAD_DUPLICATES"){
				res(api);
			} else if (data=="CAPCHA_NOT_READY"){
				if(count_in_php<30){
					check(id,api);
				}
				else {
					res(api);
				}
				count_in_php++;
				
			} else {
				window.location.reload();
			}
		*/
		}).fail(function(){
			setTimeout(function(){check(id,api)},3000)
		});
	},10000);

}
function res(api){
	count_in_php = 0;
	if(api!=undefined&&api!=""){
		sitekey = $("re-captcha").attr("sitekey");
		$.get( "http://azcaptcha.com/in.php?key="+api+"&method=userrecaptcha&googlekey="+sitekey+"&pageurl=https://www.baymack.com/vids&json=1", function(data) {
			console.log(data);
			if(JSON.parse(data).status==1){
				check(JSON.parse(data).request,api);
			} else{
				console.log(data);
			}
		}).fail(function(){
			setTimeout(function(){
				res(api);
			},3000);
		});
	} else {
		$("#loading").remove();
		//alert("Captcha");
	} 
}
function recaptcha_v2(token){
	$("textarea").html(token);
	var len = Object.keys(___grecaptcha_cfg.clients).length-1;
	for (var key1 in ___grecaptcha_cfg.clients[len]) {
		for (var key2 in ___grecaptcha_cfg.clients[len][key1]) {
			if(Object(___grecaptcha_cfg.clients[len][key1][key2]).sitekey!=undefined){
				___grecaptcha_cfg.clients[len][key1][key2].callback(token);
			}								
		}
	}
}



//--------------------------------------End Vids--------------------------------------------------------


		
		
		
		
		





//--------------------------------Prizes Redeem--------------------------------------------------	
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
		window.onmessage = function(e){
			if (e.data == 'play') {
				document.getElementsByClassName('ytp-large-play-button ytp-button')[0].click();
			}
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









