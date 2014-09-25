﻿
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           function(callback){
               setInterval(callback, 60);
           };
})();


$.setup = function() {
    $.main = document.getElementById('main');
	$.bmain = document.getElementById('bmain');
    $.mainctx = $.main.getContext('2d');
	$.bmainctx = $.bmain.getContext('2d');
    $.main.width = window.innerWidth;
    $.main.height = window.innerHeight;
    $.bmain.width = window.innerWidth;
    $.bmain.height = window.innerHeight;
	
    $.W = window.innerWidth;
    $.H = window.innerHeight;

    window.addEventListener('mousedown', $.mousedown);
    window.addEventListener('mouseup', $.mouseup);
	window.addEventListener( 'keydown', $.keydown );
	window.addEventListener( 'keyup', $.keyup );

    $.mouse = {
        leftDown: 0
    };
	
	$.keys = {
		space: 0
	};

    $.myPlayer = new $.player();
	$.platformManager = new $.platformGenerator();
    $.platforms = [];
 	$.effects = [];
	
	$.platforms.push( new $.platform(1, $.H-40, 125,100) );
   
}

$.updateDelta = function(){
    var now = Date.now();
    $.dt = (now - $.lt) / (1000 / 60);
    $.dt = ($.dt < 0) ? 0.001 : $.dt;
    $.dt = ($.dt > 10) ? 10 : $.dt;
    $.lt = now;
    $.elapsed += $.dt;
}

$.mousedown = function (e) {
    e.preventDefault();
	if(e.which == 1){$.mouse.leftDown = 1;}
};

$.mouseup = function (e) {
    e.preventDefault();
    if(e.which == 1){$.mouse.leftDown = 0;}
};

$.keydown = function(e){
	if( e.keyCode === 32 ){ $.keys.space = 1; }
};

$.keyup = function(e){
	if( e.keyCode === 32 ){ $.keys.space = 0; }
};

$.loop = function () {
    requestAnimFrame($.loop);
    $.updateDelta();

    $.myPlayer.update();
	$.platformManager.update();
	var i = $.platforms.length; while(i--){  $.platforms[i].update($.myPlayer.velocityX,i); }
		i = $.effects.length; while(i--){  $.effects[i].update(i); }
    $.mainctx.clearRect(0, 0, $.W, $.H);
    $.bmainctx.clearRect(0, 0, $.W, $.H);
    i = $.platforms.length; while(i--){  $.platforms[i].render(); }
	i = $.effects.length; while(i--){  $.effects[i].render(); }
	$.myPlayer.render();
	if(!$.myPlayer.alive()){
		 $.setup();
	}
	
}

window.addEventListener('load', function () {
    $.setup();
	 $.loop();
});