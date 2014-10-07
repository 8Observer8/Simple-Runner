$.utils = {};

$.utils.RectInRectHit = function(x1,y1,width1,height1,x2,y2,width2,height2)
{
	if(x1 >= x2 && x1 <= x2 + width2 && 
	   y1 <= y2+height1 && y1 >= y2)
	{
		return true;
	}
}

$.utils.RectOnTopRect = function(x1,y1,width1,height1,x2,y2,width2,height2)
{
	if(x1 >= x2-width1 && x1 <= x2 + width2 && 
	   y1 >= y2 && y1 <= y2+height1)
	{
		return true;
	}
}


$.utils.text = function (text, canvas, locX, locY, scale, letterSpacing) {
    var size = 5;
    for (var i = 0; i < text.length; i++) {
        var curLetter = $.utils.letters[text.charAt(i)];
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                if (curLetter[y][x] === 1) {
                    canvas.fillRect((locX+(x * scale) + ((size * scale) + letterSpacing) * i),(locY + (y * scale)), scale, scale);
                }
            }
        }
    }
}


$.utils.letters = {
	'1': [
		 [  , ,  1,  , 0 ],
		 [  , 1, 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'2': [
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'3': [
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 0 ]
		 ],
	'4': [
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  ,  , 1, 0 ]
		 ],
	'5': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 0 ]
		 ],
	'6': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'7': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'8': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'9': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'0': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'A': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'B': [
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'C': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'D': [
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 0 ]
		 ],
	'E': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'F': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	'G': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  , 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'H': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'I': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'J': [
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'K': [
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  , 1,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'L': [
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'M': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1,  , 1, 1 ],
		 [ 1,  , 1,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'N': [
		 [ 1,  1,  1,  1, 1 ],
		 [ 1, ,  ,  , 1 ],
		 [ 1,  , ,  , 1 ],
		 [ 1,  ,  , , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],  
	'O': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'P': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	'Q': [
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'R': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'S': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'T': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'U': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'V': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1,  , 1, 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'W': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  , 1,  , 1 ],
		 [ 1, 1,  , 1, 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'X': [
		 [ 1,  ,  ,  , 1 ],
		 [  , 1,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'Y': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'Z': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],   
	' ': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
 	'.': [
 		 [  ,  ,  ,  , 0 ],
 		 [  ,  ,  ,  , 0 ],
 		 [  ,  ,  ,  , 0 ],
 		 [  ,  ,  ,  , 0 ],
 		 [  ,  , 1,  , 0 ]
 		 ],
	',': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'+': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1, 1, 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
	'/': [
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	':': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
	'@': [
		 [  1, 1, 1, 1, 1 ],
		 [   ,  ,  ,  , 1 ],
		 [  1, 1, 1,  , 1 ],
		 [  1,  , 1,  , 1 ],
		 [  1, 1, 1, 1, 1 ]
		 ]
};