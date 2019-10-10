(function(){
//	$.get("https://raw.githubusercontent.com/phongprogunny01/baymack/master/key.json",function(data){
//		if(JSON.parse(data).key=="713e3042bff390889df44fd3a51285f9"){
			//baymack();
//		}
//	});
setTimeout(function(){
	baymack();
}),5000;
function baymack(){
//-------------------------------Page Error-----------------------------------------------------
	if(document.getElementsByTagName("title")[0]!=undefined){
		if(document.getElementsByTagName("title")[0].innerText=="503 Service Temporarily Unavailable"||document.getElementsByTagName("title")[0].innerText=="www.baymack.com | 502: Bad gateway"){
			setTimeout(function(){
				window.location.reload();
			},10000);
		} else {
//--------------------------------Main Page------------------------------------------------------
			if(window.location.href=="https://www.baymack.com/"){
				
				setInterval(function(){
					if(window.location.href!="https://www.baymack.com/"){
						window.location.reload();
					}	
				},3000);
				var check_main = setInterval(function(){					
					if($("i[title='Profile']").is(":visible")){
						clearInterval(check_main);
						window.location.replace("https://www.baymack.com/yahoo-login");
					}
					if($(".profile-img img").is(":visible")) {
						clearInterval(check_main);
						window.location.replace("https://www.baymack.com/history");
					}		
				},3000);

//--------------------------------View video----------------------------------------------------
			}else if(window.location.href=="https://www.baymack.com/vids"){
				
				
				
				
				


//------------------------------------Start vids--------------------------------------------------------------

	var check_href = setInterval(function(){
		if(window.location.href!="https://www.baymack.com/vids"){
			window.location.reload();
		}	
	},3000);
//---------------------------------------------------------------------------------------------------------------------------------------
	//var api = document.createElement("input");
	//api.id = "api";
	//api.style = "position: fixed;z-index: 9999999;top: 100px;width: 500px;left: 1%;cursor: pointer; display: block;";
	//document.documentElement.appendChild(api);
	localStorage.setItem("api","ca1bc8d60c12caf18a9e7a2b45dabbf2");
	//if(localStorage.getItem("api")!=null){
	//	$("#api").val(localStorage.getItem("api"));
	//}
	//$("#api").change(function(){
	//	localStorage.setItem("api",$("#api").val());
	//	alert("API captcha.guru is : "+localStorage.getItem("api"));
	//});		
//---------------------------------------------------------------------------------------------------------				
	var server = [];
	server[server.length] = "https://auto-baymack-ttp-1.000webhostapp.com/";
	server[server.length] = "https://auto-baymack-ttp-2.000webhostapp.com/";
	//server[server.length] = "https://anopheline-divers.000webhostapp.com/";
	//server[server.length] = "https://idolatrous-checkers.000webhostapp.com/";
	//server[server.length] = "https://earnest-circuitry.000webhostapp.com/";
	
	var seclect_server_captcha = 1;
	var tab_run = 0;
	var count_tab_dont_run = 0;
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
	var answer = 0;
	var count_dont_work = 0;
	var count_stop_0 = 0;
	var server_captcha = ["https://azcaptcha.com/","https://api.captcha.guru/"];	
	

	field[field.length] = 'Auto';							//1
	field[field.length] = 'Beauty';							//2
	field[field.length] = 'Comedy';							//3
	field[field.length] = 'Education';
	field[field.length] = 'Entertainment';
	field[field.length] = 'Film';
	field[field.length] = 'Family Entertainment';
	field[field.length] = 'Food';
	field[field.length] = 'Gaming';
	field[field.length] = 'How-to';
	field[field.length] = 'Music';
	field[field.length] = 'News &amp; Politics';
	field[field.length] = 'None';
	field[field.length] = 'Nonprofits';
	field[field.length] = 'People &amp; Blogs';
	field[field.length] = 'Pets';
	field[field.length] = 'Sci-Fi';
	field[field.length] = 'Sports';
	field[field.length] = 'Technology';						//19
	field[field.length] = 'Travel';							//20
	field[field.length] = 'Travel &amp; Events';			//21
	
	
	console.log("run in 1");
	var check_just_a_moment = setInterval(function(){
		if(document.getElementsByTagName("title")[0].innerText=="Baymack"){
			console.log("run in 2");
			clearInterval(check_just_a_moment);
			$.get("unlock/info",function(r){
				console.log(r);
				if(r.childStatus.length>=3){
					$.get("header/info",function(data){
						console.log(data);
						if(data.user.entries < 7){
							$("title").html(data.user.entries+"/"+data.challenge.entries+" entries");
							wcodebyttp();
						} else {
							$("title").html("Close");
							$("body").remove();
						}
					}).fail(function(){
						window.location.reload();
					});
				}else{
					$.get("header/info",function(data){
						console.log(data);
						if(data.user.entries < 7){
							$("title").html(data.user.entries+"/"+data.challenge.entries+" entries");
							wcodebyttp();
						} else {
							$("title").html("Close");
							$("body").remove();
						}
					}).fail(function(){
						window.location.reload();
					});
				}
			}).fail(function(){
				window.location.reload();
			});
		}
	},3000);
	
function get_csdl_func(idvideo){
	var rand = parseInt(Math.random()*(server.length));
	$.get( server[rand]+"get_baymack.php?id="+idvideo, function( data ) {
		if(data!="no data"&&data!="connect sql error"&&data!="error id"){
			get_csdl = data;
		}
		else if(data=="no data"||data=="connect sql error"){
			get_csdl=[];
		} else {
			console.log(data);
			alert("error get data php");
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
	for(var i=0;i<field.length;i++){
		if(choose[n]==field[i]){
			answer = i+1;
		}
	}
}
function stop_video(){
	var iframe = document.getElementById($("youtube-player iframe").attr("id"));
	iframe.contentWindow.postMessage('play', '*');
}
function next_video(){
	$("#nextvideo")[0].click();
}
function wcodebyttp(){
	console.log("run in 4");
	var interval = setInterval(function(){	
		if($("youtube-player").is(":visible")){
			tab_run = 1;
			$("#"+$("iframe").attr("id")).attr("width","1px");
			$("#"+$("iframe").attr("id")).attr("height","1px");
		} else {
			count_tab_dont_run++;
			if(count_tab_dont_run>=60){
				window.location.reload();
			}
		}
		if(tab_run) {
//---------------------------------------------------------------------------------------------fix error stop  0 ---------------------------------------------------------------------------
			if($("span[class='video-page-current-duration']").html()=="0"){
				count_stop_0++;
				if(count_stop_0>=60){
					count_stop_0 = 0;
					//window.location.reload();
					$("title").html("502 Bad Gateway");
				}		
			} else {
				count_stop_0 = 0;
			}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if($("span[class='video-page-current-duration']").html()=="0"){
				if($("span[class='video-page-current-duration']").is(":visible")==0){				//------khong hien thi thoi gian----
					window.location.reload();
				}
					index = '';
					idvideo = '';
					tat_xong=0;
					setcsdl_xong = 0;
					captcha_xong = 0;
					answer = 0;
					get_csdl_xong = 0;
					mode_auto = 0;
					choose = [];
					get_csdl = [];
					count_dont_work = 0;
			}
			else {
				idvideo = $("a[class='twitter']").attr("href").substring(102);
				if(get_csdl_xong==0){
					get_csdl_func(idvideo);
					get_csdl_xong = 1;
				}
//--------------------------------------------------------------start = end--------------------------------------
				if($("span[class='video-page-current-duration']").html()==$("span[class='video-page-total-duration']").html()){
//------------------------------------------------------------------replay---------------------------------
					if(tat_xong==0&&$("i[class='fa fa-repeat']").is(":visible")) {			
						$("#replay_video")[0].click();
						setTimeout(function(){
							stop_video();
							tat_xong = 0;
						},3000);
						tat_xong=1;
					}
//------------------------------------------------------choose---------------------------------------------
					if($("div[class='captchaDivs'] iframe").is(":visible")==0&&$("#nextvideo").is(":visible")==0&&$("ul[class='link-btn-list video-category-options']").is(":visible")==1){
						$("#loading").remove();
						choose_xong = 0;
						for (var i = 0;i<4;i++){
							choose[i] = $("a[class='border-btn']")[i].innerHTML.trim();
						}
						//---------------check field---------------------
						
						for (var i = 0;i<4;i++){
							var empty_field = 1;
							for (var j = 0; j <field.length; j++){
								if(choose[i]==field[j]){
									empty_field=0;
								}
							}
							if(empty_field==1){
								console.log("'"+choose[i]+"'");
								alert("Add field: "+choose[i]);
								clearInterval(interval);
							}
						}
						//----------------------------------------
						if(get_csdl.length!=0){
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
						}else {
							if(choose_xong==0){
								click_answer(0);
								choose_xong = 1;
							}
						}							
					}
// -----------------------captcha----------------------------------------------										
					if($("div[class='captchaDivs'] iframe").is(":visible")&&$("#replay_video").is(":visible")==0){
						if(captcha_xong==0){
							var flag_captcha = setInterval(function(){
								if($("div[class='captchaDivs'] iframe").is(":visible")&&$("#replay_video").is(":visible")==0){										
									if(count_captcha_show>=5){
										var img = document.createElement("img");
										img.setAttribute("id","loading");
										img.setAttribute("style","position: absolute;top:0;right:0;left:0;bottom:0;z-index:99999;margin:0 auto;margin-top:200px;");
										img.setAttribute("src", "https://media.giphy.com/media/S6O3WJA4RyLGDM45Nu/giphy.gif");
										document.documentElement.appendChild(img);
										if(localStorage.getItem("api")!=null&&localStorage.getItem("api")!=""){
											res(localStorage.getItem("api"),seclect_server_captcha);
										}
										count_captcha_show = 0;
										clearInterval(flag_captcha);
									} 
									count_captcha_show++;
								} else count_captcha_show = 0;
							},1000);
							captcha_xong = 1;
						}
					}
//-------------------------------------------------------------don't work anything----------------------------------------------
					if($("#nextvideo").is(":visible")==0&&$("div[class='captchaDivs'] iframe").is(":visible")==0&&$("ul[class='link-btn-list video-category-options']").is(":visible")==0&&$("span[class='video-page-current-duration']").is(":visible")==0){
						count_dont_work++;
						if(count_dont_work>=20){
							count_dont_work = 0;
							window.location.reload();
						}
					}						
// --------------------------------------------------------------------------next ------------------------------------------------------------------
					if($("#nextvideo").is(":visible")){	
						if($("div[class='watch-vdo-msg'] h2").html()=="Great! You guessed it correctly!"){
							right = 1;
							
						}
						else right = 0;				
						if(setcsdl_xong==0){	
							
							setTimeout(function(){
								next_video();
							},5000);
							
							if((right&&mode_auto==0)||(!right)){
								if($("div[class='watch-vdo-msg']").is(":visible")||$("div[class='watch-vdo-msg wrong']").is(":visible")){
									set_csdl_func(idvideo,answer,right);
								}
							} else {
								next_video();
							}
							setcsdl_xong = 1;
						}
					}
				}
			}
		}
	},3000);
}
function set_csdl_func(idvideo,answer,right){
	var rand = parseInt(Math.random()*(server.length));
	$.get( server[rand]+"set_baymack.php?id="+idvideo+"&choose="+answer+"&right="+right, function(data) {
		if(data=="update data success"||data=="add data success"){
			//next_video();
		} else {
		  alert("error set data php");
		}
	}).fail(function(){
		setTimeout(function(){
			set_csdl_func(idvideo,answer,right);
		},5000);
	});
}
function check(id,api,seclect_server_captcha){
	setTimeout(function(){
		$.get( server_captcha[seclect_server_captcha] + "res.php?key="+api+"&action=get&json=1&id="+id, function(data) {
			console.log(data);
			if(seclect_server_captcha==0){
				if (JSON.parse(data).request=="CAPCHA_NOT_READY"){
					check(id,api,seclect_server_captcha);
				} else if(JSON.parse(data).status==1){
					recaptcha_v2(JSON.parse(data).request);
					$("#loading").remove();
				} else if(JSON.parse(data).request=="ERROR_CAPTCHA_UNSOLVABLE"){
					res(api,seclect_server_captcha);
				}
			} else if(seclect_server_captcha==1){
				if (data.request=="CAPCHA_NOT_READY"){
					check(id,api,seclect_server_captcha);
				} else if(data.status==1){
					recaptcha_v2(data.request);
					$("#loading").remove();
					captcha_xong = 0;
				} else if(data.request=="ERROR_CAPTCHA_UNSOLVABLE"){
					res(api,seclect_server_captcha);
				}
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
			setTimeout(function(){check(id,api,seclect_server_captcha)},3000)
		});
	},5000);

}
function res(api,seclect_server_captcha){
	//count_in_php = 0;
	if(api!=undefined&&api!=""){
		var sitekey = $("re-captcha").attr("sitekey");
		$.get( server_captcha[seclect_server_captcha]+"in.php?key="+api+"&method=userrecaptcha&googlekey="+sitekey+"&json=1&pageurl=https://www.baymack.com/vids", function(data) {
			console.log(data);
			if(seclect_server_captcha == 0){
				if(JSON.parse(data).status==1){
					check(JSON.parse(data).request,api,seclect_server_captcha);
				} else if(JSON.parse(data).request=="ERROR_RECAPTCHA_THREAD_LIMIT"||JSON.parse(data).request=="ERROR_NO_SLOT_AVAILABLE"){
					setTimeout(function(){
						res(api,seclect_server_captcha);
					},20000);
				}
			} else if(seclect_server_captcha==1){
				if(data.status==1){
					check(data.request,api,seclect_server_captcha);
				} else if(data.request=="ERROR_RECAPTCHA_THREAD_LIMIT"||data.request=="ERROR_NO_SLOT_AVAILABLE"){
					setTimeout(function(){
						res(api,seclect_server_captcha);
					},15000);
				}
			}
		}).fail(function(){
			setTimeout(function(){
				res(api,seclect_server_captcha);
			},3000);
		});
	} else {
		$("#loading").remove();
		//alert("Captcha");
	} 
}
function recaptcha_v2(token){
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.textContent = 'var token ="'+token+'";console.log("token= "+token);$("textarea").html(token);var len = Object.keys(___grecaptcha_cfg.clients).length-1;for (var key1 in ___grecaptcha_cfg.clients[len]) {for (var key2 in ___grecaptcha_cfg.clients[len][key1]) {if(Object(___grecaptcha_cfg.clients[len][key1][key2]).sitekey!=undefined){___grecaptcha_cfg.clients[len][key1][key2].callback(token);}}}';
	document.documentElement.appendChild(script);
	setTimeout(function(){script.remove()},1000);
}



//--------------------------------------End Vids--------------------------------------------------------


				
				
				
				
				







//---------------------------------Entry----------------------------------------------------------
			} else if(window.location.href=="https://www.baymack.com/entry"){
				setInterval(function(){
					if(window.location.href!="https://www.baymack.com/entry"){
						window.location.reload();
					}	
				},3000);
				
				window.location.replace("https://www.baymack.com/vids");
//---------------------------------Block---------------------------------------------------------
			}else if(window.location.href=="https://www.baymack.com/block"){
				setInterval(function(){
					if(window.location.href!="https://www.baymack.com/block"){
						window.location.reload();
					}	
				},3000);
				$("title").html("Block");
//--------------------------------History-------------------------------------------------------
			}else if(window.location.href=="https://www.baymack.com/history"){
				setInterval(function(){
					if(window.location.href!="https://www.baymack.com/history"){
						window.location.reload();
					}	
				},3000);
				
				var check_show_history =  setInterval(function(){
					if($("div[class='historyblock'] div h2 a").is(":visible")){
						clearInterval(check_show_history);
						if($("div[class='history-tbl-data'] h3").eq(0).is(":visible")){
							if(parseFloat($("div[class='historyblock'] div h2 a").html().substring(1))<0.05){
								if($("div[class='history-tbl-data'] h3").eq(0).html().substring(0,4)==" Red"&&parseFloat($("div[class='history-tbl-data'] h3").eq(0).html().substring(9))<0.5){
									window.location.replace("https://www.baymack.com/vids");
								} else if($("div[class='history-tbl-data'] h3").eq(0).html().substring(0,4)==" Won"){
									window.location.replace("https://www.baymack.com/vids");
								} else if($("div[class='history-tbl-data'] h3").eq(0).html().substring(0,4)==" Red"&&parseFloat($("div[class='history-tbl-data'] h3").eq(0).html().substring(9))>=0.5){
									//$("title").html("Close");
								}
							}
							if($("div[class='history-tbl-data'] h3").eq(0).html().substring(0,4)==" Ear"&&parseFloat($("div[class='historyblock'] div h2 a").html().substring(1))==0.01){
									window.location.replace("https://www.baymack.com/vids");
							}
						} else if($("div[class='history-tbl-data'] h3").eq(0).is(":visible")==0&&parseFloat($("div[class='historyblock'] div h2 a").html().substring(1))==0){
							window.location.replace("https://www.baymack.com/vids");
						}
					}
				},1000);
				setTimeout(function(){
					if($("div[class='historyblock'] div h2 a").is(":visible")==0){
						window.location.reload();
					}
				},20000);
//--------------------------------Prizes Redeem--------------------------------------------------	
			}else if(window.location.href=="https://www.baymack.com/prizes"){
				setInterval(function(){
					if(window.location.href!="https://www.baymack.com/prizes"){
						window.location.reload();
					}	
				},3000);
				
				
				var redeem = document.createElement("input");
				redeem.id = "redeem";
				redeem.style = "position: fixed;z-index: 9999999;top: 5%;width: 500px;left: 1%;cursor: pointer; display: block;";
				//redeem.innerText ="cc";
				document.documentElement.appendChild(redeem);	
				
				localStorage.setItem("redeem","phonghuynh13091995@gmail.com");	
			setTimeout(function(){	
				if(localStorage.getItem("redeem")!=null){
					$("#redeem").val(localStorage.getItem("redeem"));
					var interval_show_button = setInterval(function(){
						if($("tbody tr:eq(0) td:eq(2) a").is(":visible")){
							clearInterval(interval_show_button);
							if($("tbody tr:eq(0) td:eq(2) a").css("background-color")=="rgb(95, 209, 52)"){						
								$("tbody tr:eq(0) td:eq(2) a")[0].click();
								var interval_show_table = setInterval(function(){
									if($("#subGiftCard").is(":visible")){
										clearInterval(interval_show_table);
										$("#userEmail").val(localStorage.getItem("redeem"));
										setTimeout(function(){
											$("#subGiftCard")[0].click();
											var check_to_close = setInterval(function(){
												if($("div[class='dialog-mid_redeem popup']").is(":visible")||$("tbody tr:eq(0) td:eq(2) a").css("background-color")!="rgb(95, 209, 52)"){
													clearInterval(check_to_close);
													$("title").html("Close");
												}
											},1000);
										},500);
									}
								},500);						
							} else {
								$("title").html("Close");
							}
						}
					},500);
				}
			},5000);
		//		$("#redeem").change(function(){
		//			localStorage.setItem("redeem",$("#redeem").val());
		//			alert("Auto redeem to email: "+localStorage.getItem("redeem"));
		//		});
				setTimeout(function(){
					if($("tbody tr:eq(0) td:eq(2) a").is(":visible")==0){
						window.location.reload();
					}
				},20000);
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
			} else if(window.location.href=="https://www.anonymox.net/en/overusage-msg"){
				window.close();
			}
		}
	}
}



})()









