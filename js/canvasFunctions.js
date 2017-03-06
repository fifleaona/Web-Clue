function redraw(ctx, width, height, color, pensize, img, arrX, arrY, arrDrag)
{
	// clear canvas, assumes rectangle
	ctx.clearRect(0, 0, width, height);
	
	// set stroke color, as well as style and size
	ctx.strokeStyle = color;
	ctx.lineJoin = "round";
	ctx.lineWidth = pensize;
	
	// redraw image
	ctx.drawImage(img, 0, 0, width, height);
	
	// draw pen strokes
	for(var i=0; i < arrX.length; i++)
	{
		ctx.beginPath();
		
		if(arrDrag[i] && i)
		{
			ctx.moveTo(arrX[i-1], arrY[i-1]);
		}
		else
		{
			ctx.moveTo(arrX[i]-1, arrY[i]);
		}
		
		ctx.lineTo(arrX[i], arrY[i]);
		ctx.closePath();
		ctx.stroke();
	}
};

function addClick(arrX, arrY, arrDrag, x, y, dragging)
{
  arrX.push(x);
  arrY.push(y);
  arrDrag.push(dragging);
};