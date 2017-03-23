function Node(pos)
{
  this.edge_list = [];
  this.position = pos;
  
  this.addEdge = function(endPoint)
  {
    this.edge_list.push(endPoint);
  }
  
  this.getX = function()
  {
    return this.position.x;
  }
  
  this.getY = function()
  {
    return this.position.y;
  }
}

function Graph()
{
  this.node_list = [];
  
  this.addEdge = function(startPoint, endPoint)
  {
    firstPos = this.hasNode(startPoint);
    secondPos = this.hasNode(endPoint);
	
	if(firstPos!=null)
	{
	  this.node_list[firstPos].addEdge(endPoint);
	}
	
	if(secondPos!=null)
	{
	  this.node_list[secondPos].addEdge(startPoint);
	}
	
    if( !firstPos || !secondPos )
    {
      if(!firstPos)
	  {
	    const node = new Node(startPoint);
	    node.addEdge(endPoint);
	    this.node_list.push(node);
	  }
	  if(!secondPos)
	  {
	    const node = new Node(endPoint);
	    node.addEdge(startPoint);
	    this.node_list.push(node);
	  }
    }
  }
  
  this.hasNode = function(point)
  {
    if(this.node_list.length == 0)
	{
	  return null;
	}
	else
	{
	  for(var i=0; i<this.node_list.length; i++)
	  {
		console.log(point.x + " ?? " + this.node_list[i].getX());
	    if(typeof point=="string" && point == this.node_list.position)
		{
		  return i;
		}
		else if(point.x == this.node_list[i].getX() && point.y == this.node_list[i].getY())
		{
		  return i;
		}
		else
		{
		  return null;
		}
	  }
	}
  }
}
