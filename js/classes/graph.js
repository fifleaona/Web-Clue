function Node(pos)
{
  this.edge_list = [];
  this.position = pos;
  this.touched = false;
  this.highlighted = false;
  
  this.addEdge = function(endPoint)
  {
    this.edge_list.push(endPoint);
  }
  
  this.toggleTouched = function()
  {
    if(this.touched)
	{
      this.touched = false;
	}
	else
	{
	  this.touched = true;
	}
  }
  
  this.toggleHighlighted = function()
  {
    if(this.highlighted)
	{
	  this.highlighted = false;
	}
	else
	{
      this.highlighted = true;
	}
  }
}

function Graph()
{
  this.node_list = [];
  
  this.addEdge = function(startPoint, endPoint)
  {
	if(this.node_list.length==0)
	{
	  const node1 = new Node(startPoint);
	  const node2 = new Node(endPoint);
	  node1.addEdge(endPoint);
	  node2.addEdge(startPoint);
	  
	  this.node_list.push(node1);
	  this.node_list.push(node2);
	}
	else
	{
      firstPos = this.findNode(startPoint);	  
      secondPos = this.findNode(endPoint);
	  
	  if(firstPos==null)
	  {
		const node = new Node(startPoint);
		node.addEdge(endPoint);
		this.node_list.push(node);
	  }
	  else
	  {
		this.node_list[firstPos].addEdge(endPoint);
	  }
	  
	  if(secondPos==null)
	  {
		const otherNode = new Node(endPoint);
		otherNode.addEdge(startPoint);
		this.node_list.push(otherNode);
	  }
	  else
	  {
		this.node_list[secondPos].addEdge(startPoint);
	  }
    }
  }
  
  this.findNode = function(point)
  {
    for(var i=0; i<this.node_list.length; i++)
	{
	  if(typeof point=="string" && point == this.node_list.position)
	  {
	    return i;
	  }
	  else if(point.x == this.node_list[i].position.x && point.y == this.node_list[i].position.y)
	  {
	    return i;
	  }
	}
	return null;
  }
}
