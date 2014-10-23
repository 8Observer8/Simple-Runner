﻿$.player = function () {
    this.x=$.W/5;
    this.y = $.H/2;
    this.width = 30;
    this.height = 30;
    this.oWidth = this.width;
    this.oHeight = this.height;
    this.velocityY = -10;
    this.velocityX = 0; //20
	this.maxVelocityX = 20;
    this.maxJumpHeight = 15;
    this.weight = 1;
    this.jumps = 0;
    this.maxJumps = 1;
	this.color=$.colors[Math.floor(Math.random()*3)];
	this.distance = 0;
	this.status = '';
	this.hitDetection = true;
}

$.player.prototype.update = function(){
	if (this.status != 'Demo') {
		this.accelerate();}
		else
		{this.velocityX = 0;}
	this.velocityY = (this.velocityY - (this.weight*$.dt));
	if (this.hitDetection) {this.checkCollision();}
	this.distance += (this.velocityX*$.dt)/60;
	
	//if(100%Math.round((this.distance))){
	//	$.sounds.updateSound(Math.round((this.distance)/100));
	//}
    
	if ($.mouse.leftDown) {
        this.jump();
    }
	
    if ($.keys.space) {
    	this.changeColor();
    }
  
	$.effects.push(new $.particles(this.x, ((Math.random()*(this.y-(this.y-this.height)))+(this.y-this.height)),0,this.y+1, {r:Math.round(Math.random()*255),g:Math.round(Math.random()*255),b:Math.round(Math.random()*255)}));
	
	this.y -= this.velocityY*$.dt;
}

$.player.prototype.alive = function(){

    if(this.y > $.H*5)
    {
  	 	return false;
    }
	else if(this.y > $.H){
		if(this.velocityX>0)
		{
			this.velocityX -= .25*$.dt;
		}

		return true;
	}
	//else if(this.height <= 0 ) 
	//{
	//	return false;
	//}
	return true;
}

$.player.prototype.checkCollision = function(){
	var i = $.platforms.length; while(i--){  
		if($.utils.RectOnTopRect( this.x+this.oWidth, (this.y)+Math.max(0,((this.velocityY*$.dt)*-1)),this.oWidth,Math.max(this.oHeight,(this.velocityY*$.dt)*-1),$.platforms[i].x,$.platforms[i].y,$.platforms[i].width,$.platforms[i].height  )){
	
			if(this.velocityY<=0){//on a platform
				if(this.jumps>0){	$.main.style.marginTop = 4 + 'px';};
			    this.jumps = 0;
			    this.velocityY = 0;
				this.y = $.platforms[i].y; //- (this.height);
				if($.platforms[i].color==this.color){
					this.takeDamage();
				}
			}
			
		}
	}
}

$.player.prototype.accelerate = function() {
	if(this.maxVelocityX > this.velocityX){
		this.velocityX += .1;
	} 
}

$.player.prototype.death = function() {
	
}

$.player.prototype.takeDamage = function() {
	if (this.status != 'Demo') {
		if(this.height>0)
		{
			this.height -= .2*$.dt;
			$.main.style.marginLeft = Math.random()*5 + 'px';
			$.main.style.marginTop = Math.random()*5 + 'px';
		}
		else
		{
			this.height = 0;
			this.hitDetection = false;
		}
	}
}

$.player.prototype.jump = function () {
	if(this.jumps<this.maxJumps){
		var maxJump = this.maxJumpHeight;//*$.dt;
    	this.jumps += 1;
		this.velocityY = maxJump;
		$.mouse.leftDown = 0;
	}
}

$.player.prototype.changeColor = function () {
	var currentColor = $.colors.indexOf(this.color);
	var nextColor = currentColor + 1 > $.colors.length-1 ? 0 : currentColor+1;
	this.color = $.colors[nextColor];
	$.keys.space = 0;
}

$.player.prototype.render = function(){
	//$.mainctx.save();
	$.mainctx.beginPath();
	$.utils.text("DISTANCE " + Math.round(this.distance),$.mainctx ,this.x-(this.width+5),this.y-(this.height+30),2,1);
	$.mainctx.fillStyle = 'rgba(255,255,255,1.0)';
	$.mainctx.fill();
	$.mainctx.closePath();
	//$.mainctx.restore();
	
	//$.mainctx.save();
	$.mainctx.beginPath();
    $.mainctx.fillStyle = 'rgba('+this.color.r+','+ this.color.g +','+ this.color.b +',1.0)';
	$.mainctx.shadowBlur    = 20;
	$.mainctx.shadowColor   = 'rgba(0, 0, 0, 0.0)';
	$.mainctx.lineWidth="2";
   // $.mainctx.fillRect(this.x, this.y, this.width, this.height);
	$.mainctx.rect(this.x, this.y, this.width, -this.height);
	$.mainctx.stroke();
	$.mainctx.fill();
	$.mainctx.closePath();
	//$.mainctx.restore();
}