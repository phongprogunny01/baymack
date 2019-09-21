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
			script.src = "https://raw.githubusercontent.com/phongprogunny01/baymack/master/auto_baymack.js";
			document.documentElement.appendChild(script);
	},1000);
})()









