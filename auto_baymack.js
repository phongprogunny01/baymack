(function(){
	$.get("https://raw.githubusercontent.com/phongprogunny01/baymack/master/key.json",function(data){
		if(JSON.parse(data).key=="713e3042bff390889df44fd3a51285f9"){
			baymack();
		}
	});
function baymack(){
	setInterval(function(){
		console.log("dmm");
	},2000);
}
})()









